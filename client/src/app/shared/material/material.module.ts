import { NgModule } from '@angular/core';

import {
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatCardModule
} from '@angular/material';

@NgModule({
    exports: [
        MatInputModule,
        MatIconModule,
        MatCheckboxModule,
        MatButtonModule,
        MatToolbarModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatCardModule
    ]
})
export class MaterialModule { }
