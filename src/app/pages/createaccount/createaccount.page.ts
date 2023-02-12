import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {
  messagesTermsEn,
  messagesTermsEs,
  messagesTermsRequiredEn,
  messagesTermsRequiredEs,
  validationMsgEn,
  validationMsgEs,
} from '../conf/alertaMessage';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.page.html',
  styleUrls: ['./createaccount.page.scss'],
})
export class CreateaccountPage implements OnInit {
  name = '';
  email = '';
  datebirth = '';
  city = '';
  password = '';
  passwordc = '';
  terms = false;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private translateService: TranslateService
  ) {}

  ngOnInit() {}

  async presentAlert() {
    let alertLangMessage: string;
    let alertSubHeader: string;
    let alertHeader: string;
    const alertButtons: string[] = [];

    if (this.translateService.currentLang === 'Español') {
      alertHeader = messagesTermsEs.header;
      alertSubHeader = messagesTermsEs.subHeader;
      alertLangMessage = messagesTermsEs.message;
      alertButtons.push(messagesTermsEs.buttons);
    } else {
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
    this.terms = !this.terms;


    await alert.present();
  }

  async showErrorTerms() {
    let alertLangMessage: string;
    let alertSubHeader: string;
    let alertHeader: string;
    const alertButtons: string[] = [];

    if (this.translateService.currentLang === 'Español') {
      alertHeader = messagesTermsRequiredEs.header;
      alertSubHeader = messagesTermsRequiredEs.subHeader;
      alertLangMessage = messagesTermsRequiredEs.message;
      alertButtons.push(messagesTermsRequiredEs.buttons);
    } else {
      alertHeader = messagesTermsRequiredEn.header;
      alertSubHeader = messagesTermsRequiredEn.subHeader;
      alertLangMessage = messagesTermsRequiredEn.message;
      alertButtons.push(messagesTermsRequiredEn.buttons);
    }
    const alert = await this.alertController.create({
      header: alertHeader,
      subHeader: alertSubHeader,
      message: alertLangMessage,
      buttons: alertButtons,
    });

    await alert.present();
  }

  async showvvalidationMsg() {
    let alertLangMessage: string;
    let alertSubHeader: string;
    let alertHeader: string;
    const alertButtons: string[] = [];

    if (this.translateService.currentLang === 'Español') {
      alertHeader = validationMsgEs.header;
      alertSubHeader = validationMsgEs.subHeader;
      alertLangMessage = validationMsgEs.message;
      alertButtons.push(validationMsgEs.buttons);
    } else {
      alertHeader = validationMsgEn.header;
      alertSubHeader = validationMsgEn.subHeader;
      alertLangMessage = validationMsgEn.message;
      alertButtons.push(validationMsgEn.buttons);
    }
    const alert = await this.alertController.create({
      header: alertHeader,
      subHeader: alertSubHeader,
      message: alertLangMessage,
      buttons: alertButtons,
    });

    await alert.present();
    this.goDermatologicalProfile();

  }

  async createUser() {
    if (this.password === this.passwordc) {
      if (!this.terms) {
        this.showErrorTerms();
      } else {
        try {
          const { user } = await Auth.signUp({
            username: this.email,
            password: this.password,
            attributes: {
              name: this.name,
              birthdate: this.datebirth,
              email: this.email,
            },
          });
          this.showvvalidationMsg();
          console.log(user);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }

  goBack() {
    this.router.navigateByUrl('/start');
  }

  goDermatologicalProfile(){
    this.router.navigateByUrl('/dermatological-profile-register');
  }
}
