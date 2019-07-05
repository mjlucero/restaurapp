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
    MatSelectModule,
    MatMenuModule,
    MatDialogModule
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
        MatSelectModule,
        MatMenuModule,
        MatDialogModule
    ]
})
export class MaterialModule { }
