import { NgModule } from '@angular/core';

import {
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
    exports: [
        MatInputModule,
        MatIconModule,
        MatCheckboxModule,
        MatButtonModule,
        MatToolbarModule
    ]
})
export class MaterialModule { }
