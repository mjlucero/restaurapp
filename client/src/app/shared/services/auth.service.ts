import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private urlBase: string;
    constructor(
        private http: HttpClient
    ) {
        this.urlBase = environment.urlBase;
    }

    public getAuthorizationToken() {
        return 'token';
    }
}
