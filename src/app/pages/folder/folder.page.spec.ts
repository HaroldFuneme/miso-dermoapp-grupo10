import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { USE_DEFAULT_LANG, TranslateLoader, USE_STORE, USE_EXTEND, DEFAULT_LANGUAGE } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FolderPage } from './folder.page';
import {
  TranslateService,
  TranslateStore,
  TranslateCompiler,
  TranslateParser
} from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FolderPage', () => {
  let component: FolderPage;
  let fixture: ComponentFixture<FolderPage>;

  const mockMissingTranslationHandler = {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    handle(){}
  };
  class MissingTranslationHandler {
    handle(key: string) {
      return 'Traducción faltante: ' + key;
    }
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FolderPage ],
      imports: [
        IonicModule.forRoot(),
        RouterModule.forRoot([]),
        TranslateModule.forRoot(),
        HttpClientTestingModule
      ],
      providers:[
        { provide: USE_DEFAULT_LANG, useValue: undefined },
        { provide: USE_STORE, useValue: undefined },
        { provide: USE_EXTEND, useValue: undefined },
        { provide: DEFAULT_LANGUAGE, useValue: undefined },
        { provide: MissingTranslationHandler, useValue: MissingTranslationHandler },
        {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) => new TranslateHttpLoader(http, '/assets/i18n/', '.json'),
          deps: [HttpClient]
        },
        TranslateService, TranslateStore, TranslateCompiler, TranslateParser, MissingTranslationHandler
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(FolderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
