import { IService } from "../services/service.dto";

export interface IClients {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    appointments: Appointment[];
}

export interface IClientsParam {
    page: number;
    size: number;
}
export interface Pageable {
    pageNumber: number;
    pageSize: number;
    sort: Sort;
    offset: number;
    paged: boolean;
    unpaged: boolean;
}


export interface Sort {
    unsorted: boolean;
    sorted: boolean;
    empty: boolean;
}

export interface IAllClientsResponse {
    content: IClients[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    numberOfElements: number;
    size: number;
    number: number;
    sort: Sort;
    first: boolean;
    empty: boolean;
}

  export interface IEmployee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: 'ADMIN' | 'USER' | 'OTHER_ROLE'; 
  }
  
  export interface Appointment {
    id: number;
    dateTime: string; 
    duration: number;
    comments: string;
    service: IService;
    employee: IEmployee;
  }
  