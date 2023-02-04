import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CreateaccountPage } from './createaccount.page';

describe('CreateaccountPage', () => {
  let component: CreateaccountPage;
  let fixture: ComponentFixture<CreateaccountPage>;

  const fakeActivatedRoute = {
    snapshot: { data: {  } }
  } as ActivatedRoute;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateaccountPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        {provide: ActivatedRoute, useValue: fakeActivatedRoute}
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
