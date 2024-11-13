import { ILoginRequest } from "../dto/auth/ILoginRequest";
import { ILoginResponse } from "../dto/auth/ILoginResponse";

export interface PAuth {
    /**
   *
   * @param {ILoginRequest}  - request login.
   * @returns {Promise<ILoginResponse>} - A promise that resolves with the response containing the list of certificates and pagination details.
   * @throws {Error} - Throws an error if the API call fails, handled by `handleApiErrors`.
   */
    login(req: ILoginRequest): Promise<ILoginResponse>
}
