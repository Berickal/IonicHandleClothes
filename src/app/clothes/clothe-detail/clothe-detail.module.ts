import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClotheDetailPageRoutingModule } from './clothe-detail-routing.module';

import { ClotheDetailPage } from './clothe-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClotheDetailPageRoutingModule
  ],
  declarations: [ClotheDetailPage]
})
export class ClotheDetailPageModule {}
