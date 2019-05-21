import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockComponent } from './components/stock/stock.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {}
