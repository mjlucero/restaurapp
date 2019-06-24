import { Injectable } from '@angular/core';
import { Type } from '../../../shared/models';

@Injectable({
    providedIn: 'root'
})
export class TypeService {
    private type: Type;
    constructor() { }

    getSelectedType() {
        return this.type || null;
    }
    setType(type) {
        type['active'] = type['active'] === 'activo' ? true : false;
        console.log(type);
        this.type = type;
    }
}