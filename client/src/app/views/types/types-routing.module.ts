import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeComponent } from './components/type/type.component';
import { ControlTypeComponent } from './components/control-type/control-type.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Rubro'
    },
    children: [
      {
        path: '',
        redirectTo: 'type'
      },
      {
        path: 'type',
        component: TypeComponent,
        data: {
          title: 'Stock'
        }
      },
      {
        path: 'control-type',
        component: ControlTypeComponent,
        data: {
          title: 'Rubro'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypesRoutingModule {}
