export interface ICoder {
    createdAt: Date;
    name: string;
    avatar: string;
    id: string;
}

export interface IBodyUpdate {
    name: string;
    avatar: string;
}