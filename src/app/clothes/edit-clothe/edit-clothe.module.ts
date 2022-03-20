import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditClothePageRoutingModule } from './edit-clothe-routing.module';

import { EditClothePage } from './edit-clothe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditClothePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditClothePage]
})
export class EditClothePageModule {}
