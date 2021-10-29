import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async show() {     
    let alert = await this.alertCtrl.create({       
      header:"Demande envoyée",             
      message:"Veuillez verifier dans votre mail",       
      buttons: [         
        {           
          text:"Ok",           
          handler: () => {            

          }         
        }        
      ]      
    });     
    alert.present()   
  }     
}
