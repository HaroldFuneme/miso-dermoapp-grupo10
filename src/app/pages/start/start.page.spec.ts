import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { StartPage } from './start.page';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

describe('StartPage', () => {
  let component: StartPage;
  let fixture: ComponentFixture<StartPage>;
  let translateService: TranslateService;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [StartPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule.withRoutes([]),
        TranslateModule.forRoot(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StartPage);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should changeLang', () => {
    spyOn(translateService, 'use').and.stub();
    component.changeLang({ detail: { value: 'Español' } });
    expect(translateService.use).toHaveBeenCalledWith('Español');
  });

  it('should create user', () => {
    spyOn(router, 'navigateByUrl').and.stub();
    component.goCreateAccount();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/createaccount');
    component.goSignin();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/signin');
  });
});
