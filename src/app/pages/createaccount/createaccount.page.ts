import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.page.html',
  styleUrls: ['./createaccount.page.scss'],
})
export class CreateaccountPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private router: Router
    ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'In order to use our App and/or receive our Services, \
      you must be at least 18 years of age, or the legal age of majority \
      in your jurisdiction, and possess the legal authority, right, and liberty \
      to enter into these Terms as a binding agreement. . You are not allowed \
      to use this application and / or receive services if doing \
      so is prohibited in your country or under any law or regulation applicable to you.',
      buttons: ['Accept'],
    });

    await alert.present();
  }

  goBack(){
    this.router.navigateByUrl('/start');
  }

}
