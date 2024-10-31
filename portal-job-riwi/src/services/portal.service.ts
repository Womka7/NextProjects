import { ContentCompany, ICompany, ICreateCompany } from "@/models/company.model";
import { ContentVacant, ICreateVacant, IVacant } from "@/models/vacant.model";
import { HttpClient } from "@/utils/client-http";

export class ServiceApi {
    private httpClient: HttpClient;

    constructor(){
        this.httpClient = new HttpClient();
    }

    async find(url:string){
        try{
            const response = this.httpClient.get<IVacant | ICompany >(url);
            return response
        }catch(error){
            console.log(error);
            throw error;
        }
    }

    async findAllCompany(url:string){
        try{
            const response = this.httpClient.get<ContentCompany[]>(url);
            return response
        }catch(error){
            console.log(error);
            throw error;
        }
    }

    async findById(url:string,id:string){
        try{
            const response = this.httpClient.get<ContentVacant | ContentCompany>(`${url}/${id}`);
            return response
        } catch(error){
            console.log(error);
            throw error;
        }
    }

    async destroy (url: string,id:string){
        try{
            const response = this.httpClient.delete(`${url}/${id}`);
            return response
        } catch(error){
            console.log(error);
            throw error;
        }
    }
    async createCompany(url:string,body:ICreateCompany){
        try{
            const response = await this.httpClient.post<ICreateCompany, ContentCompany>(url,body);
            return response
        }catch(error){
            console.log(error);
            throw error;
        }
    }   
    
    async createVacant(url:string,body:ICreateVacant){
        try{
            const response = await this.httpClient.post<ICreateVacant, ContentVacant>(url,body);
            return response
        }catch(error){
            console.log(error);
            throw error;
        }
    }  

    async editCompany(url:string, id:string, body:ICreateCompany){
        try{
            const response = await this.httpClient.put<ICreateCompany,ContentCompany>(`${url}/${id}`,body);
            return response;
        }catch(error){
            console.log(error);
            throw error;
        }
    }

    async editVacant(url:string, id:string, body:ICreateVacant){
        try{
            const response = await this.httpClient.put<ICreateVacant,ContentVacant>(`${url}/${id}`,body);
            return response;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
}