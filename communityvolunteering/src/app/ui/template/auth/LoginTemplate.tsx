"use client"
import Link from "next/link"
import { LoginForm } from "../../organisms/auth/LoginForm"

export const LoginTemplate =()=>{
    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-background ">
            <div className="w-full max-w-md  bg-white rounded-lg shadow-md">
                <LoginForm />
            </div>
        </div>
    )
}