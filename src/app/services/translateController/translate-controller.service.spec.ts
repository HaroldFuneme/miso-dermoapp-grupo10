import { TestBed } from '@angular/core/testing';

import { TranslateControllerService } from './translate-controller.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AlertController } from '@ionic/angular';

describe('TranslateControllerService', () => {
  let service: TranslateControllerService;
  let alertController: AlertController;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    });
    service = TestBed.inject(TranslateControllerService);
    alertController = TestBed.inject(AlertController);
    translateService = TestBed.inject(TranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call alert', async () => {
    spyOn(alertController, 'create').and.returnValue(
      Promise.resolve({
        present: () => Promise.resolve(true),
        onDidDismiss: () => Promise.resolve({ data: { values: 'ES' } }),
      } as any)
    );
    spyOn(translateService, 'getLangs').and.returnValue(['ES', 'EN']);
    await service.showTranslateOption();
    expect(service).toBeTruthy();
  });
});
