import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaseDetailPage } from './case-detail.page';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateControllerService } from 'src/app/services/translateController/translate-controller.service';
import { Router } from '@angular/router';
import { UserSessionService } from 'src/app/services/userSession/user-session.service';
import { CasesService } from 'src/app/services/cases/cases.service';
import { of } from 'rxjs';

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
    spyOn(caseService, 'getCaseDetail').and.returnValue(of(true as any));
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate on goHome', async () => {
    spyOn(router, 'navigateByUrl').and.stub();
    component.goBack();
    await component.presentAlert();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/home');
  });
});
