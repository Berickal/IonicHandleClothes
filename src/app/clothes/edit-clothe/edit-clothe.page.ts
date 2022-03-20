import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ClotheHandleService } from 'src/app/clothe-handle.service';
import { Category } from 'src/app/model/category.enum';
import { Clothe } from 'src/app/model/clothe.model';
import { MoreInfo } from 'src/app/model/moreInfo.model';

@Component({
  selector: 'app-edit-clothe',
  templateUrl: './edit-clothe.page.html',
  styleUrls: ['./edit-clothe.page.scss'],
})
export class EditClothePage implements OnInit {

  clothe: Clothe;
  id: number;
  clotheForm: FormGroup | undefined;


  constructor(
    private clotheService: ClotheHandleService,
    private fb: FormBuilder,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
        this.id = + params.get('id');
        this.clothe = this.clotheService.getClotheById(this.id);

        this.clotheForm = this.fb.group({
          name: [this.clothe.name, Validators.required],
          price: [this.clothe.price, Validators.required],
          size: [this.clothe.size, Validators.required],
          imgLink: [this.clothe.imgUrl],
          color: [this.clothe.moreInfo.color, Validators.required],
          category: [(this.clothe.moreInfo.category === Category.HOMME)? 'homme':'femme', Validators.required],
        });

      });
    }

  update(){
    if(this.clotheForm.valid){
      const newInfo: MoreInfo = {
        status: (this.clotheForm.get('price')?.value > 10),
        category: (this.clotheForm.get('category')?.value === 'homme')? Category.HOMME : Category.FEMME,
        color: this.clotheForm.get('color')?.value,
      };

      const newClothe: Clothe = {
        id: this.id,
        name: this.clotheForm.get('name')?.value,
        price: this.clotheForm.get('price')?.value,
        size: this.clotheForm.get('size')?.value,
        imgUrl: this.clotheForm.get('imgLink')?.value,
        moreInfo: newInfo,
      };
      this.clotheService.updateClothe(newClothe);
    }
  }

  goBack(){
    window.history.back();
  }
}
