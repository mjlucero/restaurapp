import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Notification } from '../models';
@Injectable({
    providedIn: 'root'
})

export class NotificationService {
    constructor(
        private snackBar: MatSnackBar
    ) { }

    public openSnackBar(configs: Notification) {

        console.log('configs', configs);

        this.snackBar.open(configs.message, configs.action, {
            direction: 'ltr',
            duration: configs.duration,
            verticalPosition: configs.verticalPosition,
            horizontalPosition: configs.horizontalPosition
        });
        // Action del boton, para despues
        // this.snackBar._openedSnackBarRef.onAction().subscribe(  () => {
        //     console.log('Prueba');
        // });
    }
}
