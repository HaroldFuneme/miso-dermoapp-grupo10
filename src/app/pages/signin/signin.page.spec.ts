import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SigninPage } from './signin.page';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

describe('SigninPage', () => {
  let component: SigninPage;
  let fixture: ComponentFixture<SigninPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SigninPage],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot(),
        RouterTestingModule.withRoutes([{ path: 'start', redirectTo: '' }]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SigninPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  }));

  it('should create', (done) => {
    expect(component).toBeTruthy();
    done();
  });

  it('should goback', (done) => {
    spyOn(router, 'navigateByUrl').and.stub();
    component.goBack();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/start');
    done();
  });

  it('should goDermatologicalProfile', () => {
    spyOn(router, 'navigateByUrl').and.stub();
    component.goDermatologicalProfile();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/home');
  });

  it('should goDermatologicalProfile after login', async () => {
    spyOn(Auth, 'signIn').and.returnValue(Promise.resolve({ user: {} } as any));
    spyOn(router, 'navigateByUrl').and.stub();
    await component.login();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/home');
  });

  it('should manage error', async () => {
    spyOn(router, 'navigateByUrl').and.stub();
    await component.login();
  });
});
