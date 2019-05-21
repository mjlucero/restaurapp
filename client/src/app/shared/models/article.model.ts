import { Type } from './';
export class Article {
    constructor(
        public denomination: string,
        public pucharasePrice: number,
        public salePrice: number,
        public stock: number,
        public measure: string,
        public isInput: boolean,
        public type: Type
    ) {}
}
