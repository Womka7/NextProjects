export interface IRegisterResponse {
    statusCode: number;
    message:    string;
    data:       Data;
}

export interface Data {
    email: string;
    name:  string;
    role:  string;
    photo: string;
    id:    number;
}
