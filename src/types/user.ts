export interface User {
    id: number;
    name: string;
    username:string;
    email: string;
    adress: {
        city: string;
    };
    phone: string;
    company: {
        name: string;
    };
}