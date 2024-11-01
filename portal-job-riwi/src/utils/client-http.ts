const defaultBaseUrl = "https://vacantsbackendgates-production.up.railway.app/api/v1";

export class HttpClient {
    private baseUrl: string;
    constructor(baseUrl?: string) {
        this.baseUrl = baseUrl || defaultBaseUrl;
    }

    async get<T>(url: string): Promise<T> {
        const headers = await this.getHeader();
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers:headers,
            method: "GET",
            cache: "no-store"
        });
        return await this.handleResponse(response);
    }

    async post<T, B>(url: string, body: B): Promise<T> {
        const headers = await this.getHeader();
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers:headers,
            method: "POST",
            body: JSON.stringify(body)
        });
        return await this.handleResponse(response);
    }

    async put<T, B>(url: string, body: B): Promise<T> {
        const headers = await this.getHeader();
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers:headers,
            method: "PUT",
            body: JSON.stringify(body)
        });
        return await this.handleResponse(response);
    }

    async delete<T>(url: string): Promise<T> {
        const headers = await this.getHeader();
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers:headers,
            method: "DELETE",
        });
        return this.handleResponse(response);
    }

    private async getHeader(){
        return {
            "Content-Type": "application/json",
        }
    }

    private async handleResponse(response: Response){
        if(!response.ok){
            const errorData = await response.json();
            throw new Error(errorData.message ||  "Ocurrió un error en la solicitud")
        }
        return await response.json();
    }
}