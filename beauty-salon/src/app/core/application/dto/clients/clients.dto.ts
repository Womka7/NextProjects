interface IClient {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    appointments: Appointment[];
}

interface Pageable {
    pageNumber: number;
    pageSize: number;
    sort: Sort;
    offset: number;
    paged: boolean;
    unpaged: boolean;
}


interface Sort {
    unsorted: boolean;
    sorted: boolean;
    empty: boolean;
}

interface IClientsResponse {
    content: IClient[];
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



interface IService {
    id: number;
    name: string;
    description: string;
    price: number;
  }
  
  
  interface IEmployee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: 'ADMIN' | 'USER' | 'OTHER_ROLE'; 
  }
  
  interface Appointment {
    id: number;
    dateTime: string; 
    duration: number;
    comments: string;
    service: IService;
    employee: IEmployee;
  }
  