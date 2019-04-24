import { Address } from './';
export class User {
    public name: string;
    public lastname: string;
    public telephone: number;
    public email: string;
    public password: string;
    public img: string;
    public role: string;
    public address: Address;
    public active: boolean;
    constructor() { }
}
