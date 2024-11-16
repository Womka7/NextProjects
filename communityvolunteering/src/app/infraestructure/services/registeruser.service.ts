import { HttpClient } from "../utils/client-http";
import { IRegisterResponse } from "@/app/core/application/dto/auth/IRegisterResponse";
import { PRegisterUser } from "@/app/core/application/ports/registeruser.port";

export class UserService implements PRegisterUser {
    private clientHttp: HttpClient;

    constructor() {
        this.clientHttp = new HttpClient();
    }
    async getUsers(): Promise<IGetUsersResponse>{
        return this.clientHttp.get<IGetUsersResponse>("users");
    }
    async createUser(req: FormData): Promise<IRegisterResponse> {
        const dataform = true;
        return this.clientHttp.post<IRegisterResponse, FormData>(
            `users`,
            req,
            dataform
        );
    }
}