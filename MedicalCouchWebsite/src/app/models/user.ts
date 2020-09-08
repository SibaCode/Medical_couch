export interface UserResponse {

    status: number ,
    message: string
    data: Datas
}


interface Datas {
    auth: boolean ,
    token: string, 
    user: User
}

export interface User {
    name: string, 
    surname: string,
    title: string,
    id: number,
    medical_aid: number,
    address: string,
    medical_name: string,
    cell: string,
    aid_number: number 
    idLoc: string
}
