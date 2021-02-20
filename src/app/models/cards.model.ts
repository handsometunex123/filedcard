export interface Card {
    id?: number;
    name: string;
    cardno: string;
    expiration: string;
    cvv: string;
    amount: number;
}

// export interface Card {
//     id: string;
//     name: string;
//     capital: string;
// }

export interface Cards {
    countries: Card[];
}