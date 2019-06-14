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
    setType(type: Type) {
        this.type = type;
    }
}