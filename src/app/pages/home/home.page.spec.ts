import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
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
import { CasesService } from 'src/app/services/cases/cases.service';
import { UserSessionService } from 'src/app/services/userSession/user-session.service';
import { of } from 'rxjs';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let caseService: CasesService;
  let userSessionService: UserSessionService;
  let router: Router;

  const fakeActivatedRoute = {
    snapshot: { data: {} },
  } as ActivatedRoute;

  class MyMissingTranslationHandler implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams) {
      return 'My default value for missing translations';
    }
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    caseService = TestBed.inject(CasesService);
    userSessionService = TestBed.inject(UserSessionService);
    router = TestBed.inject(Router);
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

  it('Should call service on ionViewWillEnter', () => {
    spyOn(caseService, 'getCases').and.returnValue(of([]));
    component.ionViewWillEnter();
    expect(caseService.getCases).toHaveBeenCalled();
  });

  it('Should call navigete on goCaseRegister', () => {
    spyOn(router, 'navigateByUrl').and.stub();
    component.goCaseRegister();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/case-register');
  });

  it('Should call navigete on goBack', () => {
    spyOn(router, 'navigateByUrl').and.stub();
    component.goBack();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/start');
  });
});
