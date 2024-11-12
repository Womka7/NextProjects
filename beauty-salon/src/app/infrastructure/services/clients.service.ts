import { PClient } from "@/app/core/application/ports";
import { HttpClient } from "../utils/client-http";
import { IAllClientsResponse, IClients, IClientsParam, IClientsRequest, IClientsResponse } from "@/app/core/application/dto";

export class ClientService implements PClient {
    private clientHttp: HttpClient;

    constructor() {
        this.clientHttp = new HttpClient();
    }

    async getAllClients({ size, page }: IClientsParam): Promise<IAllClientsResponse> {
        try {
            const response = await this.clientHttp.get<IAllClientsResponse>(`clients?page=${page}&size=${size}`);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async createClient(req: IClientsRequest): Promise<IClientsResponse> {
        try {
            const response = await this.clientHttp.post<IClientsResponse, IClientsRequest>(`clients`, req);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getClientById(id: number): Promise<IClientsResponse> {
        try {
            const response = await this.clientHttp.get<IClientsResponse>(`clients/${id}`);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateClientById(id: number, req: IClientsRequest): Promise<IClientsResponse> {
        try {
            const response = await this.clientHttp.put<IClientsResponse, IClientsRequest>(`clients/${id}`, req);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteClientById (id: number){
        try {
            const response = await this.clientHttp.delete(`clients/${id}`);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}