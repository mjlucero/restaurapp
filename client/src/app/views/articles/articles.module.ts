import { NgModule } from '@angular/core';
import { ArticlesRoutingModule } from './articles-routing.module';
import { SharedModule } from '../../shared/shared.module';
// ========================================
// COMPONENTS
// ========================================
import { StockComponent } from './components/stock/stock.component';

@NgModule({
    declarations: [
        StockComponent
    ],
    imports: [
        ArticlesRoutingModule,
        SharedModule
    ],
    exports: []
})

export class ArticlesModule { }
