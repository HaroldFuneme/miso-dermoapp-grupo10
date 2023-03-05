import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaseRegisterPage } from './case-register.page';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterCaseService } from 'src/app/services/registerCase/register-case.service';
import { UserSessionService } from 'src/app/services/userSession/user-session.service';
import { of } from 'rxjs';

describe('CaseRegisterPage', () => {
  let component: CaseRegisterPage;
  let fixture: ComponentFixture<CaseRegisterPage>;
  let router: Router;
  let registerCaseService: RegisterCaseService;
  let userSessionService: UserSessionService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CaseRegisterPage],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CaseRegisterPage);
    router = TestBed.inject(Router);
    registerCaseService = TestBed.inject(RegisterCaseService);
    userSessionService = TestBed.inject(UserSessionService);
    component = fixture.componentInstance;
    fixture.detectChanges();
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

  it('should sendRegisterProfile', () => {
    spyOn(registerCaseService, 'sendRegisterCase').and.returnValue(of({}));
    component.sendRegisterProfile();
    expect(registerCaseService.sendRegisterCase).toHaveBeenCalled();
  });
});
