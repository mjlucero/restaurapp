import { NgModule } from '@angular/core';

import {
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule
} from '@angular/material';

@NgModule({
    exports: [
        MatInputModule,
        MatIconModule,
        MatCheckboxModule,
        MatButtonModule,
        MatToolbarModule,
        MatSnackBarModule
    ]
})
export class MaterialModule { }
