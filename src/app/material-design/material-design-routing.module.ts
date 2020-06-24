import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialDesignPage } from './material-design.page';

const routes: Routes = [
  {
    path: '',
    component: MaterialDesignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialDesignPageRoutingModule {}
