import { NextResponse } from "next/server";

const baseUrl = "https://beautysalongates-production.up.railway.app/api/v1"


export async function POST(req: Request, res: Response) {
    const servicesResponse = await req.json();
    const token = req.headers.get('Authorization');

    const response = await fetch(`${baseUrl}/services`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(servicesResponse),
    });
    const data = await response.json();
    return NextResponse.json(data,{status:response.status});
}