import { authOptions, CustomSession } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const defaultBaseUrl = "https://communnityvolunteering-production.up.railway.app/api/v1"

export class HttpClient{
  private baseUrl : string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || defaultBaseUrl;
  }

  private async getHeader(dataform:boolean=false) {
    const session = (await getServerSession(authOptions)) as CustomSession  | null;

    const headers: HeadersInit = {  };
    if (dataform === false) {
      headers["Content-Type"] = "application/json";
    } 

    if (session?.user?.token) {
      headers["Authorization"] = `Bearer ${session.user.token}`;
    }
  
    return headers;
  }

  private async handleResponse(response: Response){
    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }
    return await response.json();
  }


  async get<T>(url: string, isBinary: boolean = false): Promise<T> {
    const headers = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`,{
      headers: headers,
      method: "GET",
      cache: "no-store"
    })
    if (isBinary) {
      return response.arrayBuffer() as unknown as T;
    }
    return this.handleResponse(response)
  }

  async delete<T>(url: string): Promise<T> {
    const headers = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers: headers,
      method: "DELETE",
    });

    return this.handleResponse(response);
  }

  async post <T, B> (url: string, body: B, dataform: boolean = false): Promise<T>{
    const headers = await this.getHeader(dataform);
    console.log("body del post",body)

    const response = await fetch(`${this.baseUrl}/${url}`,{
      headers: headers,
      method: "POST",
      body: dataform ? body as FormData: JSON.stringify(body),
    })
    console.log("respuesta del post",response);
    return this.handleResponse(response);
  }

  async put <T, B> (url: string, body:B): Promise<T>{
    const headers = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`,{
      headers: headers,
      method: "PUT",
      body : JSON.stringify(body),
    })
    return this.handleResponse(response);
  }
}