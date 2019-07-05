import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    private urlBase: string;
    constructor(
        private http: HttpClient
    ) {
        this.urlBase = environment.urlBase;
    }

    // urlBase ex: http://localhost:3000/api/
    // urlBase + path ex: http://localhost:3000/api/person
    public get(path: string, params?: Object) {
        const paramsUrl = params ? this.createParams(params) : null;
        const endpoint = paramsUrl ? `${path}?${paramsUrl}` : path;
        const url = `${this.urlBase}${endpoint}`;
        return this.http.get(url);
    }

    public post(path: string, body: any) {
        const url = `${this.urlBase}${path}`;
        return this.http.post(url, body);
    }

    public put(path: string, body: any) {
        const url = `${this.urlBase}${path}`;
        return this.http.put(url, body);
    }

    public delete(path: string) {
        const url = `${this.urlBase}${path}`;
        return this.http.delete(url);
    }

    private createParams(queryParams: Object): URLSearchParams {
        // Armar los parametros desde un JSON
        const params = new URLSearchParams();
        Object.keys(queryParams).forEach(key => {
            params.append(key, queryParams[key]);
        });
        return params;
    }

}
