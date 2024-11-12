import { PService } from "@/app/core/application/ports/services.port";
import { HttpClient } from "../utils/client-http";
import { IAllServicesResponse, IServiceRequest, IServiceResponse, IServicesParam } from "@/app/core/application/dto";


export class ServicesService implements PService {
    private clientHttp: HttpClient;

    constructor() {
        this.clientHttp = new HttpClient();
    }

    async getAllServices({ size, page }: IServicesParam): Promise<IAllServicesResponse> {
        try {
            const response = this.clientHttp.get<IAllServicesResponse>(`services?page=${page}&size=${size}`);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async createService(service: IServiceRequest): Promise<IServiceResponse> {
        try {
            const registerService = await this.clientHttp.post<IServiceResponse, IServiceRequest>('services', service)
            return registerService;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getServiceById(id: number): Promise<IServiceResponse> {
        try {
            const service = await this.clientHttp.get<IServiceResponse>(`services/${id}`);
            return service;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateServiceById(id: number, service: IServiceRequest): Promise<IServiceResponse> {
        try {
            const updateService = await this.clientHttp.put<IServiceResponse, IServiceRequest>(`services/${id}`, service)
            return updateService;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteServiceById(id: number) {
        try {
            const deleteService = this.clientHttp.delete(`services/${id}`);
            return deleteService;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
