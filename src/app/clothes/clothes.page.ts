import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ClotheHandleService } from '../clothe-handle.service';
import { Clothe } from '../model/clothe.model';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.page.html',
  styleUrls: ['./clothes.page.scss'],
})
export class ClothesPage implements OnInit {

  clothes: Clothe[];

  constructor(private clotheService: ClotheHandleService, private navCtrl: NavController) { }

  ngOnInit(): void {
    this.clothes = this.clotheService.getAllClothes();
  }

  ngOnChange(): void{
    this.clothes = this.clotheService.getAllClothes();
  }

  showDetail(id: number): void{
    this.navCtrl.navigateForward(`/clothes/${id}`);
  }

  goAddItemForm(): void{
    this.navCtrl.navigateForward(`/add-clothe`);
  }

}
