import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CreateaccountPage } from './createaccount.page';
import { MissingTranslationHandler, MissingTranslationHandlerParams, TranslateLoader } from '@ngx-translate/core';
import {
  DEFAULT_LANGUAGE,
  TranslateCompiler,
  TranslateParser,
  TranslateService,
  TranslateStore,
  USE_DEFAULT_LANG,
  USE_EXTEND,
  USE_STORE,
  TranslateModule
} from '@ngx-translate/core';

describe('CreateaccountPage', () => {
  let component: CreateaccountPage;
  let fixture: ComponentFixture<CreateaccountPage>;

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
      declarations: [ CreateaccountPage ],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot(),
      ],
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

    fixture = TestBed.createComponent(CreateaccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', (done) => {
    expect(component).toBeTruthy();
    done();
  });
});
