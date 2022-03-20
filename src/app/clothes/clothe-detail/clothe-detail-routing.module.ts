import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClotheDetailPage } from './clothe-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ClotheDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClotheDetailPageRoutingModule {}
