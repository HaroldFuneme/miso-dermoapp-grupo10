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
  USE_EXTEND, USE_STORE
} from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { MissingTranslationHandlerParams } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DermatologicalProfileRegisterPage', () => {
  let component: DermatologicalProfileRegisterPage;
  let fixture: ComponentFixture<DermatologicalProfileRegisterPage>;

  const fakeActivatedRoute = {
    snapshot: { data: {  } }
  } as ActivatedRoute;

  class MyMissingTranslationHandler implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams) {
      return 'My default value for missing translations';
    }
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DermatologicalProfileRegisterPage ],
      imports: [IonicModule.forRoot(), TranslateModule, HttpClientModule, HttpClientTestingModule],
      providers: [
        { provide: USE_DEFAULT_LANG, useValue: undefined },
        { provide: USE_STORE, useValue: undefined },
        { provide: USE_EXTEND, useValue: undefined },
        { provide: DEFAULT_LANGUAGE, useValue: undefined },
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler },
        TranslateService, TranslateStore, TranslateCompiler, TranslateParser, TranslateLoader
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DermatologicalProfileRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', (done) => {
    expect(component).toBeTruthy();
    done();
  });
});
