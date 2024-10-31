"use client"
import { ILoginRequest } from "@/app/core/application/dto"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { FormField } from "../../molecules/common/FormField"

export const loginScheme = yup.object()
    .shape({
        userName:yup
        .string()
        .email("El correo es inválido")
        .required("El correo es obligatorio"),
        password:yup
        .string()
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .required("La contraseña es obligatoria")
    })

export const LoginForm =()=>{
    const{
        control,
        handleSubmit,
        setError,
        formState:{errors}
    }=useForm<ILoginRequest>({
        mode:"onChange",
        reValidateMode:"onChange",
        resolver:yupResolver(loginScheme)
    })

    const handleLogin=(data:ILoginRequest)=>{
        console.log(data);
        // service login
    }
    return(
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