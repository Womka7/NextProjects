import { Appointment } from "./clients.dto";

export interface IClientsResponse {
    id:           number;
    firstName:    string;
    lastName:     string;
    phone:        string;
    email:        string;
    appointments: Appointment[];
}
