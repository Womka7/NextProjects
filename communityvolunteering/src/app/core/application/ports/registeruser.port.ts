import { IRegisterResponse } from "../dto/auth/IRegisterResponse";

export interface PRegisterUser{
    /**
     * Register user
     * @param {FormData} - Register request
     * @returns {Promise<IRegisterResponse>}Register response
     */

    createUser(req: FormData): Promise<IRegisterResponse>
    
}