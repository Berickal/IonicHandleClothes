import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditClothePage } from './edit-clothe.page';

const routes: Routes = [
  {
    path: '',
    component: EditClothePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditClothePageRoutingModule {}
