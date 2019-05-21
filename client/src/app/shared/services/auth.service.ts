import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private urlBase: string;
    private token;
    private currentUser;
    constructor(
        private http: HttpClient
    ) {
        this.urlBase = environment.urlBase;
    }

    public getAuthorizationToken() {
        return this.token || JSON.parse(localStorage.getItem('token'));
    }
    public setToken(token) {
        localStorage.setItem('user_token', JSON.stringify(token));
        this.token = token;
    }
    public setCurrentUser(userInfo) {
        localStorage.setItem('user_info', JSON.stringify(userInfo));
        this.currentUser = userInfo;
    }
}
