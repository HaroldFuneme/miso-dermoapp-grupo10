import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AlertController, IonicModule } from '@ionic/angular';

import { CaseDetailPage } from './case-detail.page';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateControllerService } from 'src/app/services/translateController/translate-controller.service';
import { Router } from '@angular/router';
import { UserSessionService } from 'src/app/services/userSession/user-session.service';
import { CasesService } from 'src/app/services/cases/cases.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

let firstHandler = () => null;
let secondHandler = (props?: any) => null;
const alertController = {
  create: (props) => {
    firstHandler = props.buttons[0].handler;
    secondHandler = props.buttons[1].handler;
    return Promise.resolve({ present: () => Promise.resolve(true) });
  },
};

describe('CaseDetailPage', () => {
  let component: CaseDetailPage;
  let fixture: ComponentFixture<CaseDetailPage>;
  let router: Router;
  let userSessionService: UserSessionService;
  let caseService: CasesService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CaseDetailPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        // TranslateControllerService
      ],
      providers: [
        {
          provide: AlertController,
          useValue: alertController,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CaseDetailPage);
    router = TestBed.inject(Router);
    userSessionService = TestBed.inject(UserSessionService);
    caseService = TestBed.inject(CasesService);
    component = fixture.componentInstance;
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
    spyOn(caseService, 'getCaseDetail').and.returnValue(of([] as any));
    spyOn(caseService, 'getCaseDiagnosis').and.returnValue(of([] as any));
    spyOn(caseService, 'updateCase').and.returnValue(of(true as any));
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate on goHome', () => {
    spyOn(router, 'navigateByUrl').and.stub();
    component.goBack();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/home');
  });

  it('should request doctor diagnosis', async () => {
    await component.presentAlert();
    await secondHandler('doctor');
    expect(caseService.updateCase).toHaveBeenCalled();
  });

  it('should mock ontologyc diagnosis', async () => {
    const iniitalLength = component.caseDiagnosis.length;
    await component.presentAlert();
    secondHandler();
    expect(component.caseDiagnosis.length).toBe(iniitalLength + 1);
  });
});
