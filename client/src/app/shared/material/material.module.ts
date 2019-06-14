import { NgModule } from '@angular/core';

import {
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSelectModule
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
        MatCardModule,
        MatSelectModule
    ]
})
export class MaterialModule { }
