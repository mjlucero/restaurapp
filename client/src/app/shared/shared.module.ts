
// =====================================
// MODULES
// =====================================
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [],
    imports: [
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
    exports: [
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ]
})

export class SharedModule { }
