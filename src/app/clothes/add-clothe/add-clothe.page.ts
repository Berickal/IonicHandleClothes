import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ClotheHandleService } from 'src/app/clothe-handle.service';
import { Category } from 'src/app/model/category.enum';
import { Clothe } from 'src/app/model/clothe.model';
import { MoreInfo } from 'src/app/model/moreInfo.model';

@Component({
  selector: 'app-add-clothe',
  templateUrl: './add-clothe.page.html',
  styleUrls: ['./add-clothe.page.scss'],
})
export class AddClothePage implements OnInit {

  clotheForm: FormGroup = this.fb.group({
    name: [[], Validators.required],
    price: [[], Validators.required],
    size: [[], Validators.required],
    imgLink: [[]],
    color: [[], Validators.required],
    category: ['homme', Validators.required],
  });

  constructor(private clotheService: ClotheHandleService, private fb: FormBuilder, private navCtrl: NavController) { }

  ngOnInit() {
  }

  save(){
    if(this.clotheForm.valid){
      const newInfo: MoreInfo = {
        status: (this.clotheForm.get('price')?.value > 10),
        category: (this.clotheForm.get('category')?.value === 'homme')? Category.HOMME : Category.FEMME,
        color: this.clotheForm.get('color')?.value,
      };

      const newClothe: Clothe = {
        id: 0,
        name: this.clotheForm.get('name')?.value,
        price: this.clotheForm.get('price')?.value,
        size: this.clotheForm.get('size')?.value,
        imgUrl: this.clotheForm.get('imgLink')?.value,
        moreInfo: newInfo,
      };
      this.clotheService.addClothe(newClothe);
      this.navCtrl.navigateRoot(`clothes`);
    }
  }

}
