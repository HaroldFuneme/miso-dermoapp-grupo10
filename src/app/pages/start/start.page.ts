import { Component, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  public languages: string [] = [];

  constructor(
    private translateService: TranslateService,
    private router: Router
  ) {
    this.translateService.setDefaultLang('English');
    this.translateService.addLangs(['English', 'Español']);
    this.languages = translateService.getLangs();
  }

  ngOnInit() {
  }

  changeLang(event){
    this.translateService.use(event.detail.value);
  }

  async createUser() {
    console.log('creating user!!');
    try {
      const { user } = await Auth.signUp({
        username: 'Harold',
        password: 'HaroldFuneme92%',
        attributes: {
          birthdate: '01012023',
          email: 'h.funeme@uniandes.edu.co', // required
        },
      });
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  async signIn() {
    try {
      const user = await Auth.signIn('Harold', 'HaroldFuneme92%');
      console.log(user);
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  goCreateAccount(){
      this.router.navigateByUrl('/createaccount');
  }
  goSignin(){
    this.router.navigateByUrl('/signin');
  }

}
