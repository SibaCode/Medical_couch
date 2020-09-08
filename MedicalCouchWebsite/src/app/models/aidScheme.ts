export interface AidScheme {
    id: number ,
    name: string 
}



export interface AidSchemeResponse {
    status: number,
    messsage: string, 
    data: AidScheme[] 
}
