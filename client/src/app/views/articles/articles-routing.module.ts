import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockComponent } from './components/stock/stock.component';
import { ControlArticleComponent } from './components/control-article/control-article.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Article'
    },
    children: [
      {
        path: '',
        redirectTo: 'stock'
      },
      {
        path: 'stock',
        component: StockComponent,
        data: {
          title: 'Stock'
        }
      },
      {
        path: 'control-article',
        component: ControlArticleComponent,
        data: {
          title: 'Articulo'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {}
