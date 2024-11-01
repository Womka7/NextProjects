import { ContentCompany, ICompany, ICreateCompany } from "@/models/company.model";
import { ContentVacant, ICreateVacant, IVacant } from "@/models/vacant.model";
import { HttpClient } from "@/utils/client-http";

export class Service {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  async findCompany(page: number, size: number, name: string) {
    try {
      const response = this.httpClient.get<ICompany>(
        `company?page=${page}&size=${size}&name=${name}`
      );
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findAllCompany() {
    try {
      const response = this.httpClient.get<ContentCompany[]>("company/all");
      return response
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async findCompanyById(id: string) {
    try {
      const response = this.httpClient.get<ContentCompany>(`company/${id}`);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createCompany(body: ICreateCompany) {
    try {
      const response = this.httpClient.post<ContentCompany, ICreateCompany>("company", body);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateCompany(id: string, body: ICreateCompany) {
    try {
      const response = this.httpClient.put<ContentCompany, ICreateCompany>(`company/${id}`, body)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async destroyCompany(id: string) {
    try {
      const response = this.httpClient.delete<ICompany>(`company/${id}`);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findVacant(page: number, size: number) {
    try {
      const response = this.httpClient.get<IVacant>(`vacants?page=${page}&size=${size}`)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findVacantById(id: string) {
    try {
      const response = this.httpClient.get<ContentVacant>(`vacants/${id}`);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createVacant(body: ICreateVacant) {
    try {
      const response = this.httpClient.post<ContentVacant, ICreateVacant>("vacants", body);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateVacant(id: string, body: ICreateVacant) {
    try {
      const response = this.httpClient.put<ContentVacant, ICreateVacant>(`vacants/${id}`, body)
      return response
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async destroyVacant(id: string) {
    try {
      const response = this.httpClient.delete<IVacant>(`vacants/${id}`);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}