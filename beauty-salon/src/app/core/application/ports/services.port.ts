import { IAllServicesResponse, IServiceRequest, IServiceResponse, IServicesParam } from "../dto";

export interface PService{

    /**
     * Get all Services
     *  @param {IServiceParam} req get of Services
     *  @param {Promise<IAllServicesResponse>} response get of Services
    */
    getAllServices(req: IServicesParam): Promise<IAllServicesResponse>;

    /**
     * Create new Services
     *  @param {IServicesRequest} req create of Services
     *  @param {Promise<IServicesResponse>} response create of Services
    */
    createService(req: IServiceRequest): Promise<IServiceResponse>;

    /**
     * Get Service by ID
     *  @param {number} req get of Service by ID
     *  @param {Promise<IServiceResponse>} response get of Service by ID
    */
   getServiceById(id:number): Promise<IServiceResponse>;
   
   /**
    * Update Services by ID
     *  @param {number} req id update of Services by ID
     *  @param {IServiceRequest} req update of Services by ID
     *  @param {Promise<IServiceResponse>} response update of Services by ID
    */
   updateServiceById(id: number, req: IServiceRequest): Promise<IServiceResponse>;
   
   /**
    * Delete Services by ID
     *  @param {number} req id delete of Services by ID
    */
   deleteServiceById(id: number): Promise<void>;
}
