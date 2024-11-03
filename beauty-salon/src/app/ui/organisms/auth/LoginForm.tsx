"use client"
import { ErrorResponse, FieldError, ILoginRequest } from "@/app/core/application/dto"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { FormField } from "../../molecules/common/FormField"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export const loginScheme = yup.object()
    .shape({
        userName: yup
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
        setError,
        formState: { errors }
    } = useForm<ILoginRequest>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(loginScheme)
    })

    const router = useRouter()
    const handleLogin = async (data: ILoginRequest) => {
        console.log(data);
        // service login
        try {
            const result = await signIn("credentials", {
              redirect: false,
              username: data.userName,
              password: data.password,
            });
      
            console.log(result);
      
            if (result?.error) {
              console.log("Ocurrio un error", JSON.parse(result.error));
              handleError(JSON.parse(result.error))
              return;
            }
            router.push("/dashboard/services")
          } catch (error) {
            console.log(error);
          }
        };

    const handleError = (error: unknown) => {
        const errorData = error as ErrorResponse
        if (errorData && errorData.errors) {
            if (Array.isArray(errorData.errors) && 'field' in errorData.errors[0]) {
                errorData.errors.forEach((fieldError) => {
                    const { field, error } = fieldError as FieldError;
                    setError(field as keyof ILoginRequest, {
                        message: error,
                    });
                });
            } else {
                if ("message" in errorData.errors[0]) {
                  setError("userName", {
                    message: errorData.errors[0].message,
                  });
                }
              }
            }
          };

        return (
            <form className="w-full max-w-sm mx-auto p-4 space-y-4" onSubmit={handleSubmit(handleLogin)}>
                <h2 className="text-2xl font-semibold text-center">Iniciar Sesión</h2>
                <FormField<ILoginRequest>
                    control={control}
                    type="email"
                    label="Correo Electrónico"
                    name="userName"
                    error={errors.userName}
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
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white font-medium rounded-lg bg-blue-500 hover:bg-blue-600"
                >Iniciar Sesión</button>
            </form>
        )
    }