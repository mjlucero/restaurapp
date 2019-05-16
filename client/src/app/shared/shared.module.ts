
// =====================================
// MODULES
// =====================================
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// =====================================
// COMPONENTS
// =====================================
import { FormComponent } from './components';

@NgModule({
    declarations: [
        FormComponent
    ],
    imports: [
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        CommonModule
    ],
    exports: [
        // Modules
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        CommonModule,
        // Components
        FormComponent
    ]
})

export class SharedModule { }
