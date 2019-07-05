import { Injectable } from '@angular/core';
import { Type } from '../../../shared/models';

@Injectable({
    providedIn: 'root'
})
export class TypeService {
    private type: Type;
    private typeAction: 'add' | 'update' | 'delete';
    constructor() { }

    getSelectedType() {
        return this.type || null;
    }
    setType(type) {
        this.type = type;
    }
    setAction(action: 'add' | 'update' | 'delete') {
        this.typeAction = action;
    }
    getAction() {
        return this.typeAction;
    }
}
