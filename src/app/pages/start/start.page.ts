import { Component, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

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

  goCreateAccount(){
      this.router.navigateByUrl('/createaccount');
  }
  goSignin(){
    this.router.navigateByUrl('/signin');
  }

}
