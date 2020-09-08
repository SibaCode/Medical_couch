export interface Practice {
    name: string,
    discipline: string,
    number: string,
    website: string,
    operating_hours: string,
    active: number,
    practice_address: string,
    address: string,
    title: string,
    Dr_name: string
    Dr_surname: string,
    email: string
}

export interface PracticeResponse {
    status: number,
    messsage: string, 
    data: Practice[] 
}
