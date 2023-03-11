import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiagnosticDetailPage } from './diagnostic-detail.page';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { SendRegisterService } from '../../services/sendeRegister/send-register.service';
import { UserSessionService } from '../../services/userSession/user-session.service';

describe('DiagnosticDetailPage', () => {
  let component: DiagnosticDetailPage;
  let fixture: ComponentFixture<DiagnosticDetailPage>;
  let router: Router;
  let sendRegisterService: SendRegisterService;
  let userSessionService: UserSessionService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticDetailPage ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
        TranslateModule.forRoot()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DiagnosticDetailPage);
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
