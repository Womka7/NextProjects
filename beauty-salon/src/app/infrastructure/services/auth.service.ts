import { ILoginRequest, ILoginResponse } from "@/app/core/application/dto";
import { PAuth } from "@/app/core/application/ports";
import { HttpClient } from "../utils/client-http";

export class AuthService implements PAuth {
    private clientHttp: HttpClient;
    private basePath: string = "auth";

    constructor() {
        this.clientHttp = new HttpClient();
    }

    async login(req: ILoginRequest): Promise<ILoginResponse> {
        console.log(req);

        return this.clientHttp.post<ILoginResponse, ILoginRequest>(
            `${this.basePath}/login`,
            req
        )
    }


}