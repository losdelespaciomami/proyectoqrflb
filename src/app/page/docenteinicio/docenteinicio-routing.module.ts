import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocenteinicioPage } from './docenteinicio.page';

const routes: Routes = [
  {
    path: '',
    component: DocenteinicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocenteinicioPageRoutingModule {}
