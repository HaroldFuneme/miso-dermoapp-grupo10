import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AlertController, IonicModule } from '@ionic/angular';

import { CreateaccountPage } from './createaccount.page';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Auth } from 'aws-amplify';

describe('CreateaccountPage', () => {
  let component: CreateaccountPage;
  let fixture: ComponentFixture<CreateaccountPage>;
  let alertCtr: AlertController;
  let translateService: TranslateService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CreateaccountPage],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot(),
        RouterTestingModule.withRoutes([{ path: 'start', redirectTo: '' }]),
        FormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateaccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    alertCtr = TestBed.inject(AlertController);
    translateService = TestBed.inject(TranslateService);
  }));

  it('should create', (done) => {
    expect(component).toBeTruthy();
    done();
  });

  it('Should not create user if password doestn match', () => {
    component.password = '123';
    component.passwordc = '1234';
    component.createUser();
  });

  it('Should ShowError if not terms accepted ', () => {
    component.password = '123';
    component.passwordc = '123';
    spyOn(alertCtr, 'create').and.returnValue({ present: () => true } as any);
    component.createUser();
    expect(alertCtr.create).toHaveBeenCalledWith({
      header: 'Error',
      subHeader: 'Important message!',
      message: jasmine.any(String) as any,
      buttons: ['ok'],
    });
  });

  it('Should ShowError (ES) if not terms accepted ', () => {
    component.password = '123';
    component.passwordc = '123';
    spyOn(alertCtr, 'create').and.returnValue({ present: () => true } as any);
    translateService.use('Español');
    component.createUser();
    expect(alertCtr.create).toHaveBeenCalledWith({
      header: 'Error',
      subHeader: '¡Mensaje Importante!',
      message: jasmine.any(String) as any,
      buttons: ['Aceptar'],
    });
  });

  it('Should showvvalidationMsg if pwd match & terms are accepted ', async () => {
    component.password = '123';
    component.passwordc = '123';
    spyOn(alertCtr, 'create').and.returnValue({ present: () => true } as any);
    spyOn(Auth, 'signUp').and.returnValue(Promise.resolve({ user: {} } as any));
    await component.presentAlert();
    await component.createUser();
    expect(alertCtr.create).toHaveBeenCalledWith({
      header: 'Success!',
      subHeader: 'User created!',
      message: jasmine.any(String) as any,
      buttons: ['ok'],
    });
  });

  it('Should showvvalidationMsg (ES) if pwd match & terms are accepted ', async () => {
    component.password = '123';
    component.passwordc = '123';
    spyOn(alertCtr, 'create').and.returnValue({ present: () => true } as any);
    spyOn(Auth, 'signUp').and.returnValue(Promise.resolve({ user: {} } as any));
    translateService.use('Español');
    await component.presentAlert();
    await component.createUser();
    expect(alertCtr.create).toHaveBeenCalledWith({
      header: 'Exito!',
      subHeader: 'Usuario creado correctamente!',
      message: jasmine.any(String) as any,
      buttons: ['Aceptar'],
    });
  });
});
