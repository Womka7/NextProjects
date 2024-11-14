"use client"

import { IRegisterRequest } from "@/app/core/application/dto/auth/IRegisterRequest"
import { FormField } from "../../molecules/Common/FormField"
import { Button } from "../../atoms/Button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useRouter } from "next/navigation"

export const registerScheme = yup.object()
    .shape({
        email: yup
            .string()
            .email("El correo es inválido")
            .required("El correo es obligatorio"),
        password: yup
            .string()
            .min(8, "La contraseña debe tener al menos 8 caracteres")
            .required("La contraseña es obligatoria"),
        name: yup
            .string()
            .required("Se requiere el nombre de usuario"),
        role: yup
            .string()
            .required("El rol es obligatorio"),
        
    })
export const RegisterForm=()=>{
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<IRegisterRequest>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(registerScheme)
    })

    const router = useRouter()
    const handleRegister = async (data: IRegisterRequest) => {
        try {
            const dataform=new FormData();
            dataform.append("name",data.name);
            dataform.append("email",data.email);
            dataform.append("password",data.password);
            dataform.append("role",data.role);
            
            if (data.photo){
                dataform.append("photo",data.photo);
            }
            const response = await fetch("/api/users/post", {
                method: "POST",
                body: dataform
            });
            console.log("desde form register user",response);
            if (!response.ok){
                throw new Error("Error en el registro de usuario");
            }
            alert("Registro exitoso!");

            router.push("/dashboard/services")
        } catch (error) {
            console.log(error);
        }
    };


    return(
        <form className="w-full max-w-sm mx-auto p-4 space-y-4" onSubmit={handleSubmit(handleRegister)}>
            <h2 className="text-2xl font-semibold text-center">Iniciar Sesión</h2>
            <p className="text-center text-sm mb-4 text-gray-600">Ingresa tus credenciales para acceder a tu cuenta</p>
            <FormField<IRegisterRequest>
                control={control}
                type="email"
                label="Correo Electrónico"
                name="email"
                error={errors.email}
                placeholder="Ingresa Tu Correo electrónico"
            />
            <FormField<IRegisterRequest>
                control={control}
                type="password"
                label="Contraseña"
                name="password"
                error={errors.password}
                placeholder="Ingresa Tu Contraseña"
            />
            <FormField<IRegisterRequest>
                control={control}
                type="text"
                label="Nombre"
                name="name"
                error={errors.name}
                placeholder="Ingresa Tu Nombre"
            />
            <Button
                type="submit"
                className="w-full px-4 py-2 text-white font-medium rounded-lg bg-gray-800 hover:bg-gray-900"
            >Registrar Usuario</Button>
            
        </form>
    )
}