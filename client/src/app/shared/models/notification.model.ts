import { MatSnackBarConfig } from '@angular/material/snack-bar';

export class Notification {

    public duration: number;
    public message: string;
    public action: string;
    public verticalPosition: 'top' | 'bottom';
    public horizontalPosition: 'end' | 'start' | 'center' | 'left' | 'right';

    constructor(message: string, action?: string, duration?: number) {

        this.action = action ? action : '';
        this.message = message;

        this.duration = duration ? duration : 4 * 1000;
        this.verticalPosition = 'bottom';
        this.horizontalPosition = 'end';

    }
}
