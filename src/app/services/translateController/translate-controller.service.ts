import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateControllerService {
  constructor(
    private alertController: AlertController,
    private translateService: TranslateService
  ) {}

  async showTranslateOption() {
    const langs = this.translateService.getLangs();

    const inputs = [];

    for (const lang of langs) {
      inputs.push({
        label: await this.getTranslation(lang),
        type: 'radio',
        value: lang,
        checked: this.translateService.currentLang === lang,
      });
    }

    const alert = await this.alertController.create({
      header: await this.getTranslation('CHANGE_LANG_TITLE'),
      buttons: [
        {
          text: await this.getTranslation('CANCEL'),
          role: 'cancel',
        },
        {
          text: await this.getTranslation('CONTINUE'),
          role: 'confirm',
        },
      ],
      inputs,
    });
    await alert.present();

    const { data } = await alert.onDidDismiss();
    if (data.values) {
      this.translateService.use(data.values);
    }
  }

  async getTranslation(key: string) {
    const value = await this.translateService.get(key).toPromise();
    return value;
  }
}
