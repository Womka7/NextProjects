"use client"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation"
import { ILoginRequest } from "@/app/core/application/dto/auth/ILoginRequest"
import { signIn } from "next-auth/react";
// import { ErrorResponse, FieldError } from "@/app/core/application/dto/common/error-response.dto";
import { FormField } from "../../molecules/Common/FormField";
import Link from "next/link";
import { Button } from "../../atoms/Button";

export const loginScheme = yup.object()
    .shape({
        email: yup
            .string()
            .email("El correo es inválido")
            .required("El correo es obligatorio"),
        password: yup
            .string()
            .min(8, "La contraseña debe tener al menos 8 caracteres")
            .required("La contraseña es obligatoria")
    })

export const LoginForm = () => {
    const {
        control,
        handleSubmit,
        // setError,
        formState: { errors }
    } = useForm<ILoginRequest>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(loginScheme)
    })

    const router = useRouter()
    const handleLogin = async (data: ILoginRequest) => {
        try {
            const result = await signIn("credentials", {
                redirect: false,
                email: data.email,
                password: data.password,
            });

            console.log(result);

            if (result?.error) {
                console.log("Ocurrio un error", JSON.parse(result.error));
                JSON.parse(result.error)
                // handleError
                return;
            }
            router.push("/dashboard/services")
        } catch (error) {
            console.log(error);
        }
    };

    // const handleError = (error: unknown) => {
    //     const errorData = error as ErrorResponse
    //     if (errorData && errorData.errors) {
    //         if (Array.isArray(errorData.errors) && 'field' in errorData.errors[0]) {
    //             errorData.errors.forEach((fieldError) => {
    //                 const { field, error } = fieldError as FieldError;
    //                 setError(field as keyof ILoginRequest, {
    //                     message: error,
    //                 });
    //             });
    //         } else {
    //             if ("message" in errorData.errors[0]) {
    //                 setError("email", {
    //                     message: errorData.errors[0].message,
    //                 });
    //             }
    //         }
    //     }
    // };

    return (
        <form className="w-full max-w-sm mx-auto p-4 space-y-4" onSubmit={handleSubmit(handleLogin)}>
            <h2 className="text-2xl font-semibold text-center">Iniciar Sesión</h2>
            <p className="text-center text-sm mb-4 text-gray-600">Ingresa tus credenciales para acceder a tu cuenta</p>
            <FormField<ILoginRequest>
                control={control}
                type="email"
                label="Correo Electrónico"
                name="email"
                error={errors.email}
                placeholder="Ingresa Tu Correo electrónico"
            />
            <FormField<ILoginRequest>
                control={control}
                type="password"
                label="Contraseña"
                name="password"
                error={errors.password}
                placeholder="Ingresa Tu Contraseña"
            />
            <Button
                type="submit"
                className="w-full px-4 py-2 text-white font-medium rounded-lg bg-gray-800 hover:bg-gray-900"
            >Iniciar Sesión</Button>
            <div className="flex flex-col items-center space-y-2 text-sm">
                <Link href="/" className="text-blue-500 hover:text-blue-700"
                > ¿Olvidaste tu contraseña? </Link>
                <div className="flex flex-row items-center ">
                   <p className="pr-2">¿No tienes una cuenta?</p>{" "}
                    <Link href="/auth/register" className="text-blue-500 hover:text-blue-700"> 
                     Registrate aquí </Link>
                </div>
            </div>
        </form>
    )
}