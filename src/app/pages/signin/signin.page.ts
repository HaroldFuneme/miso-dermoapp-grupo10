import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { AlertController } from '@ionic/angular';
import { User } from '../../models/User';
import { UserSessionService } from '../../services/userSession/user-session.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  email = '';
  password = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private userSessionService: UserSessionService
  ) {}

  ngOnInit() {}

  goBack() {
    this.router.navigateByUrl('/start');
  }
  goDermatologicalProfile() {
    this.router.navigateByUrl('/home');
  }

  async login() {
    try {
      const user = await Auth.signIn(this.email, this.password);
      this.userSessionService.setSession(user);
      this.goDermatologicalProfile();
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'ERROR: ',
        message: error,
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
}
