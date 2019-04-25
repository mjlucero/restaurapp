
// =====================================
// MODULES
// =====================================
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader.component';

@NgModule({
    declarations: [LoaderComponent],
    imports: [
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
    exports: [
        // Components
        LoaderComponent,
        // Modules
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ]
})

export class SharedModule { }
