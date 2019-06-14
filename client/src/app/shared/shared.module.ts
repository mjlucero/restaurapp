
// =====================================
// MODULES
// =====================================
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// =====================================
// COMPONENTS
// =====================================
import { FormComponent, GridComponent } from './components';

@NgModule({
    declarations: [
        FormComponent,
        GridComponent
    ],
    imports: [
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        CommonModule,
        NgxDatatableModule
    ],
    exports: [
        // Modules
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        CommonModule,
        NgxDatatableModule,
        // Components
        FormComponent,
        GridComponent
    ]
})

export class SharedModule { }
