import { authOptions, CustomSession } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const defaultBaseUrl = "https://beautysalongates-production.up.railway.app/api/v1"

export class HttpClient{
  private baseUrl : string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || defaultBaseUrl;
  }

  private async getHeader() {
    const session = (await getServerSession(authOptions)) as CustomSession  | null;

    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };
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


  async get<T>(url: string): Promise<T> {
    const headers = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`,{
      headers: headers,
      method: "GET",
      cache: "no-store"
    })
    return this.handleResponse(response)
  }

  async delete(url: string){
    const headers = await this.getHeader();
    await fetch(`${this.baseUrl}/${url}`,{
      headers: headers,
      method: "DELETE",
    })
  }

  async post <T, B> (url: string, body: B): Promise<T>{
    const headers = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`,{
      headers: headers,
      method: "POST",
      body: JSON.stringify(body),
    })
    console.log(response);
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