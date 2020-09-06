export interface AppointmentResponse {
    status: number,
    messsage: string, 
    data: Appointment[] 
}

export interface Appointment {
    date: number ,
    pratice: string,
    symptoms: string
    doctor:string
}