import { UserService } from "@/app/infraestructure/services/registeruser.service";
import { NextResponse } from "next/server";

const registerUser =new UserService()
export async function POST(req: Request) {
    try {
        const dataform = await req.formData();  
        const newUser = await registerUser.createUser(dataform);

        return NextResponse.json(newUser, { status: 200 });
    } catch (error) {
        console.error("Error en el servidor:", error);
        return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 });
    }
}