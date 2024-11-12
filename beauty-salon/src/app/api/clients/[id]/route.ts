import { IClientsRequest } from "@/app/core/application/dto";
import { ClientService } from "@/app/infrastructure/services/clients.service";
import { NextResponse } from "next/server";

const clientService = new ClientService();
export async function GET(req: Request, { params }: { params: Promise<{ id: number }> }) {
    try {
        const id = (await params).id;
        const serviceData = await clientService.getClientById(id);

        return NextResponse.json(serviceData, { status: 200 });
    } catch (error) {
        console.error("Error en el servidor:", error);
        return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 });
    }
}

export async function PUT(request: Request,
    { params }: { params: Promise<{ id: number }> }) {
    try {
        const body: IClientsRequest = await request.json();
        const id = (await params).id
        const updateService = await clientService.updateClientById(id, body);

        return NextResponse.json(updateService, { status: 200 });
    } catch (error) {
        console.error("Error en el servidor:", error);
        return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 });
    }
}
export async function DELETE(request: Request,
    { params }: { params: Promise<{ id: number }> }) {
    try {
        const id = (await params).id
         await clientService.deleteClientById(id);

        return NextResponse.json({message: 'Eliminado correctamente'}, { status: 200 });
    } catch (error) {
        console.error("Error en el servidor:", error);
        return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 });
    }
}