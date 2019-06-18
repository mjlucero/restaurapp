import { Component } from '@angular/core';

@Component({
    selector: 'app-loader',
    template: `
    <mat-progress-spinner
        *ngIf="showLoader"
        class="loader"
        color="accent"
        mode="indeterminate"
        value="50"
        diameter="60"
        >
    </mat-progress-spinner>
    `,
    styles: [`
      .loader {
        margin: 0 10px;
        position: absolute;
        top: 45%;
        left: 49%;
      }
    `]
})

export class LoaderComponent {
    public showLoader: boolean = false;
    constructor() { }
    show() {
      this.showLoader = true;
    }
    hide() {
      this.showLoader = false;
    }
}
