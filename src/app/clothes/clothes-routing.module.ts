import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClothesPage } from './clothes.page';

const routes: Routes = [
  {
    path: '',
    component: ClothesPage
  },
  {
    path: 'clothe-detail',
    loadChildren: () => import('./clothe-detail/clothe-detail.module').then( m => m.ClotheDetailPageModule)
  },
  {
    path: 'add-clothe',
    loadChildren: () => import('./add-clothe/add-clothe.module').then( m => m.AddClothePageModule)
  },
  {
    path: 'edit-clothe',
    loadChildren: () => import('./edit-clothe/edit-clothe.module').then( m => m.EditClothePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClothesPageRoutingModule {}
