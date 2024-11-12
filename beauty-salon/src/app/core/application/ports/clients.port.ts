import { IAllClientsResponse, IClients, IClientsParam, IClientsRequest, IClientsResponse } from "../dto";

export interface PClient {
    /**
     * Get all clients
     *  @param {IClientsParam} req get of clients
     *  @param {Promise<IAllClientsResponse>} response get of clients
    */
    getAllClients(req: IClientsParam): Promise<IAllClientsResponse>;

    /**
     * Create new client
     *  @param {IClientsRequest} req create of client
     *  @param {Promise<IClientsResponse>} response create of client
    */
    createClient(req: IClientsRequest): Promise<IClientsResponse>;

    /**
     * Get client by ID
     *  @param {number} req get of client by ID
     *  @param {Promise<IClientsResponse>} response get of client by ID
    */
   getClientById(id:number): Promise<IClientsResponse>;
   
   /**
    * Update client by ID
     *  @param {number} req id update of client by ID
     *  @param {IClientsRequest} req update of client by ID
     *  @param {Promise<IClientsResponse>} response update of client by ID
    */
   updateClientById(id: number, req: IClientsRequest): Promise<IClientsResponse>;
   
   /**
    * Delete client by ID
     *  @param {number} req id delete of client by ID
    */
   deleteClientById(id: number): Promise<void>;
}