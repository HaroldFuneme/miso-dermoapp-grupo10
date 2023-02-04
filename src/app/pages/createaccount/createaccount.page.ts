import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { messagesTermsEn, messagesTermsEs } from '../conf/alertaMessage';

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
      alertHeader = messagesTermsEs.header;
      alertSubHeader = messagesTermsEs.subHeader;
      alertLangMessage = messagesTermsEs.message;
      alertButtons.push(messagesTermsEs.buttons);
    }else{
      alertHeader = messagesTermsEn.header;
      alertSubHeader = messagesTermsEn.subHeader;
      alertLangMessage = messagesTermsEn.message;
      alertButtons.push(messagesTermsEn.buttons);
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
