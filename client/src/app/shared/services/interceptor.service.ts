import { HttpEvent, HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';
import { Injectable } from '@angular/core';

import { Notification } from '../models';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()

export class InterceptorService implements HttpInterceptor {

    constructor(
        private auth: AuthService,
        private notificationService: NotificationService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log('Entra en juego el interceptor?');
        // Too can set other headers
        // Get the auth token from the service.
        const authToken = this.auth.getAuthorizationToken();

        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        const authReq = req.clone({
            headers: req.headers.set('Authorization', authToken)
        });
        return next.handle(authReq)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        // client-side error
                        errorMessage = `Error: ${error.error.message}`;
                    } else {
                        // server-side error
                        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                    }

                    const notification: Notification = new Notification(errorMessage);
                    this.notificationService.openSnackBar(notification);

                    return throwError(errorMessage);
                })
            );
    }
}
