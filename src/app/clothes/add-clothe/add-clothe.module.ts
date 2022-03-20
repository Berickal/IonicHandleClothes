import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddClothePageRoutingModule } from './add-clothe-routing.module';

import { AddClothePage } from './add-clothe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddClothePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [AddClothePage]
})
export class AddClothePageModule {}
