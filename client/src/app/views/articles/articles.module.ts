import { NgModule } from '@angular/core';
import { ArticlesRoutingModule } from './articles-routing.module';
import { SharedModule } from '../../shared/shared.module';
// ========================================
// COMPONENTS
// ========================================
import { StockComponent } from './components/stock/stock.component';
import { ControlArticleComponent } from './components/control-article/control-article.component';

@NgModule({
    declarations: [
        StockComponent,
        ControlArticleComponent
    ],
    imports: [
        ArticlesRoutingModule,
        SharedModule
    ],
    exports: []
})

export class ArticlesModule { }
