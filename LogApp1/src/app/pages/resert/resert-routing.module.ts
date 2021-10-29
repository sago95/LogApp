import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResertPage } from './resert.page';

const routes: Routes = [
  {
    path: '',
    component: ResertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResertPageRoutingModule {}
