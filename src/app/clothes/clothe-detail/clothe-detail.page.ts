import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ClotheHandleService } from 'src/app/clothe-handle.service';
import { Clothe } from 'src/app/model/clothe.model';

@Component({
  selector: 'app-clothe-detail',
  templateUrl: './clothe-detail.page.html',
  styleUrls: ['./clothe-detail.page.scss'],
})
export class ClotheDetailPage implements OnInit {

  clothe: Clothe;
  id: number;

  constructor(
    private clotheService: ClotheHandleService,
    private route: ActivatedRoute,
    private alert: AlertController,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = + params.get('id');
      this.clothe = this.clotheService.getClotheById(this.id);
  });
  }

  async remove(){
    const alert = await this.alert.create({
      header: 'Confirmation de suppression',
      message: 'Voulez-vous vraiment supprimer cet article?',
      buttons: [
        {
          text: 'Annuler',
        },
        {
          text: 'Confirmer',
          handler: ()=>{
            this.clotheService.removeClothe(this.id);
          }
        }
      ],
    });

    await alert.present();
  }

  goEditItemForm(): void{
    this.navCtrl.navigateRoot(`/edit-clothe/${this.id}`);
  }
}
