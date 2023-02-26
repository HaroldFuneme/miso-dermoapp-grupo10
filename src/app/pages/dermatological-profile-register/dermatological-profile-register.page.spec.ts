import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DermatologicalProfileRegisterPage } from './dermatological-profile-register.page';
import {
  DEFAULT_LANGUAGE,
  MissingTranslationHandler,
  TranslateCompiler,
  TranslateLoader,
  TranslateModule,
  TranslateParser,
  TranslateService,
  TranslateStore,
  USE_DEFAULT_LANG,
  USE_EXTEND,
  USE_STORE,
} from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MissingTranslationHandlerParams } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SendRegisterService } from 'src/app/services/sendeRegister/send-register.service';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { UserSessionService } from 'src/app/services/userSession/user-session.service';

describe('DermatologicalProfileRegisterPage', () => {
  let component: DermatologicalProfileRegisterPage;
  let fixture: ComponentFixture<DermatologicalProfileRegisterPage>;
  let router: Router;
  let sendRegisterService: SendRegisterService;
  let userSessionService: UserSessionService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DermatologicalProfileRegisterPage],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DermatologicalProfileRegisterPage);
    router = TestBed.inject(Router);
    sendRegisterService = TestBed.inject(SendRegisterService);
    userSessionService = TestBed.inject(UserSessionService);
    spyOn(userSessionService, 'getSession').and.returnValue({
      username: 'test',
      pool: undefined,
      session: null,
      client: undefined,
      signInUserSession: undefined,
      authenticationFlowType: '',
      storage: undefined,
      keyPrefix: '',
      userDataKey: '',
      attributes: undefined,
      preferredMFA: '',
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', (done) => {
    expect(component).toBeTruthy();
    done();
  });

  it('should navigate on goHome', () => {
    spyOn(router, 'navigateByUrl').and.stub();
    component.goHome();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/home');
  });

  it('should navigate on goBack', () => {
    spyOn(router, 'navigateByUrl').and.stub();
    component.goBack();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/createaccount');
  });

  it('should navigate on sendRegister', async () => {
    spyOn(sendRegisterService, 'send').and.returnValue(of(true));
    await component.sendRegister();
    expect(sendRegisterService.send).toHaveBeenCalled();
  });
});
