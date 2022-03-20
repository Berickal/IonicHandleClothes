import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddClothePage } from './add-clothe.page';

const routes: Routes = [
  {
    path: '',
    component: AddClothePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddClothePageRoutingModule {}
