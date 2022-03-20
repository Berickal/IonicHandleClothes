import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'clothes',
    pathMatch: 'full'
  },
  {
    path: 'clothes',
    loadChildren: () => import('./clothes/clothes.module').then( m => m.ClothesPageModule)
  },
  {
    path: 'clothes/:id',
    loadChildren: () => import('./clothes/clothe-detail/clothe-detail.module').then( m => m.ClotheDetailPageModule)
  },
  {
    path: 'add-clothes',
    loadChildren: () => import('./clothes/add-clothe/add-clothe.module').then( m => m.AddClothePageModule)
  },
  {
    path: 'edit-clothe/:id',
    loadChildren: () => import('./clothes/edit-clothe/edit-clothe.module').then( m => m.EditClothePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
