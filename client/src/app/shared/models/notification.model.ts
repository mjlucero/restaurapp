import { MatSnackBarConfig } from '@angular/material/snack-bar';

export class Notification {

    public duration: number;
    public message: string;
    public action: string;
    public verticalPosition: 'top' | 'bottom';
    public horizontalPosition: 'end' | 'start' | 'center' | 'left' | 'right';
    private panelClass: string[];

    constructor(type: 'danger' | 'success' | 'info' | 'warning', message: string, action?: string, duration?: number) {

        this.action = action ? action : '';
        this.message = message;

        this.duration = duration ? duration : 4 * 1000;
        this.verticalPosition = 'bottom';
        this.horizontalPosition = 'end';
        this.panelClass = [`${type}-snack`];
    }

    public setPanelClass( classes: string[]) {
        this.panelClass.concat(classes);
    }
    public getPanelClass(): string[] {
        return this.panelClass;
    }
}
