
import RegisterForm from "../../organisms/auth/RegisterForm"

export const RegisterTemplate =()=>{

    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-background ">
            <div className="w-full max-w-md  bg-white rounded-lg shadow-md">
                <RegisterForm />
            </div>
        </div>
    )
}