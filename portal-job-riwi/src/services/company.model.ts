
  import { ContentCompany, ICompany, ICreateCompany } from "@/models/company.model";
import { HttpClient } from "@/utils/client-http";
  
  export class CompaniesService {
    private httpClient: HttpClient;
  
    constructor() {
      this.httpClient = new HttpClient();
    }
  
    async findAll(page: number, size: number,  name: string) {
      try {
        const companies = this.httpClient.get<ICompany>(
          `company?page=${page}&size=${size}&name=${name}`
        );
        return companies;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  
    async findAllCompanies(){
      try{
          const companies = this.httpClient.get<ContentCompany[]>("company/all");
          return companies
      }catch(error){
          console.log(error);
          throw error;
      }
  }
    async findById(id: string) {
      try {
        const companies = this.httpClient.get<ContentCompany>(`company/${id}`);
        return companies;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  
    async create(body: ICreateCompany) {
      try {
        const companies = this.httpClient.post<ContentCompany, ICreateCompany>(
          "company",
          body
        );
        return companies;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  
    async update(id: string, body: ICreateCompany) {
      try {
        const companies = this.httpClient.put<ContentCompany, ICreateCompany>(`company/${id}`, body)
        return companies
      } catch (error) {
        console.log(error)
        throw error
      }
    }
  
    async destroy(id: string) {
      try {
        const companies = this.httpClient.delete<ICompanyResponse>(
          `company/${id}`
        );
        return companies;
      } catch (error) {
        console.log('Service Error: Destroy:', error);
        throw error;
      }
    }
  }