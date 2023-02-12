import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DermatologicalProfileRegisterPage } from './dermatological-profile-register.page';

describe('DermatologicalProfileRegisterPage', () => {
  let component: DermatologicalProfileRegisterPage;
  let fixture: ComponentFixture<DermatologicalProfileRegisterPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DermatologicalProfileRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DermatologicalProfileRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
