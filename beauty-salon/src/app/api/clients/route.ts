import { IClientsRequest } from "@/app/core/application/dto";
import { ClientService } from "@/app/infrastructure/services/clients.service";
import { NextResponse } from "next/server";

const clientService = new ClientService();
export async function POST(req: Request) {
    try {
        const body: IClientsRequest= await req.json();
        const newService = await clientService.createClient(body);
        
        return NextResponse.json(newService, { status: 200 });
    } catch (error) {
        console.error("Error en el servidor:", error);
        return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 });
    }
}