export interface IService {
    id: number;
    name: string;
    description: string;
    price: number;
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


export interface IAllServicesResponse {
    content: IService[];
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

export interface IServicesParam {
    page: number;
    size: number;
}
