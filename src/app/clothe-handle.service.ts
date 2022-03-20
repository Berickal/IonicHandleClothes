import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Clothe } from './model/clothe.model';

@Injectable({
  providedIn: 'root'
})
export class ClotheHandleService {

  private allClothes: Clothe[] = [];

  constructor(private storage: Storage, private navCtrl: NavController,) { this.init(); }

  async init(){
    const storage = await this.storage.create();
  }

  public getAllClothes(): Clothe[]{
    const clothes: Clothe[] = [];
    let obj;
    this.storage.forEach((value) => {
      obj = JSON.parse(value);
      const newClothe: Clothe = {
        id: obj.id,
        name: obj.name,
        price: obj.price,
        size: obj.size,
        imgUrl: obj.imgUrl,
        moreInfo:{
          category: obj.moreInfo.category,
          status: obj.moreInfo.status,
          color: obj.moreInfo.color,
        },
      };
      console.log(newClothe);
      clothes.push(newClothe);
      this.allClothes.push(newClothe);
    });
    return clothes;
  }

  public addClothe(clothe: Clothe): void{
    let maxId = 0;
    this.storage.forEach((value, key) => {
      console.log(key);
      if(parseInt(key, 10) >= maxId) {maxId = parseInt(key, 10) + 1; console.log('MaxId : ' + maxId);}
    })
    .then(()=>{
                clothe.id = maxId;
                clothe.moreInfo.status = (clothe.price <= 10);
                const jsonClothe = JSON.stringify(clothe);
                console.log(jsonClothe);
                this.storage.set(maxId.toString(), jsonClothe);
                window.location.reload();
              });
  }

  public getClotheById(id: number): Clothe{
    return this.allClothes.find(item => item.id === id);
  }

  public removeClothe(id: number): void{
    this.storage.remove(id.toString())
    .then(() => {
      this.navCtrl.navigateRoot(`clothes`);
    }).then(() => {window.location.reload();});
  }

  public removeAllClothe(): void{
    this.storage.clear().then(() => {this.allClothes = [];});
    window.location.reload();
  }

  public updateClothe(clothe: Clothe): void{
    clothe.moreInfo.status = (clothe.price <= 10);
    const jsonClothe = JSON.stringify(clothe);
    console.log(jsonClothe);
    this.storage.set(clothe.id.toString(), jsonClothe)
    .then(() => {this.navCtrl.navigateRoot(`/clothes`);})
    .then(() => {window.location.reload();});
  }
}
