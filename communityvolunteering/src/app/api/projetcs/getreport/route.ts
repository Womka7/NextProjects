import { ProjectsServices } from "@/app/infraestructure/services/projects.service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const usedownloadReport = new ProjectsServices();
    const serviceData = await usedownloadReport.downloadReport();

    const response = new NextResponse(serviceData, { status: 200 });

    response.headers.set("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"); 
    response.headers.set("Content-Disposition", "attachment; filename=report.xlsx"); 

    return response;
  } catch (error) {
    console.error("Error en el servidor:", error);
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 });
  }
}
