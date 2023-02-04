import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.page.html',
  styleUrls: ['./createaccount.page.scss'],
})
export class CreateaccountPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private router: Router,
    private translateService: TranslateService
    ) { }

  ngOnInit() {
  }

  async presentAlert() {
    console.log(this.translateService.currentLang);
    let alertLangMessage: string;
    let alertSubHeader: string;
    let alertHeader: string;
    const alertButtons: string [] = [];



    if (this.translateService.currentLang ==='Español') {
      alertHeader = 'Alerta';
      alertSubHeader = '¡Mensaje Importante!';
      alertLangMessage = 'Para utilizar nuestra aplicación y/o recibir nuestros servicios, \
      debe tener al menos 18 años de edad, o la mayoría de edad legal \
      en su jurisdicción, y posee la autoridad legal, el derecho y la libertad \
      para celebrar estos Términos como un acuerdo vinculante. . No estas permitido \
      para usar esta aplicación y / o recibir servicios si está haciendo \
      así está prohibido en su país o bajo cualquier ley o regulación aplicable a usted.';
      alertButtons.push('Aceptar');
    }else{
      alertHeader = 'Alert';
      alertSubHeader = 'Important message';
      alertLangMessage = 'In order to use our App and/or receive our Services, \
      you must be at least 18 years of age, or the legal age of majority \
      in your jurisdiction, and possess the legal authority, right, and liberty \
      to enter into these Terms as a binding agreement. . You are not allowed \
      to use this application and / or receive services if doing \
      so is prohibited in your country or under any law or regulation applicable to you.';
      alertButtons.push('Accept');
    }
    const alert = await this.alertController.create({
      header: alertHeader,
      subHeader: alertSubHeader,
      message: alertLangMessage,
      buttons: alertButtons,
    });

    await alert.present();
  }

  goBack(){
    this.router.navigateByUrl('/start');
  }

}
