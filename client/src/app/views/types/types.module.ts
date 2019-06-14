import { NgModule } from '@angular/core';
import { TypesRoutingModule } from './types-routing.module';
import { SharedModule } from '../../shared/shared.module';
// ========================================
// COMPONENTS
// ========================================
import { TypeComponent } from './components/type/type.component';
import { ControlTypeComponent } from './components/control-type/control-type.component';

@NgModule({
    declarations: [
        TypeComponent,
        ControlTypeComponent
    ],
    imports: [
        TypesRoutingModule,
        SharedModule
    ],
    exports: []
})

export class TypesModule { }
