export interface ReviewResponse {
    status: number ,
    messsage: string, 
    data: Review[]
}

export interface Review {
    comment: string ,
    star: number,
    name: string,
    surname: string,
    created_on: string
}