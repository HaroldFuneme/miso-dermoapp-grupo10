import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public languages: string [] = [];

  constructor(
    private translateService: TranslateService
    ) {
    this.translateService.setDefaultLang('English');
    this.translateService.addLangs(['English', 'Español']);
    this.languages = translateService.getLangs();
  }

  changeLang(event){
    this.translateService.use(event.detail.value);
  }
}
