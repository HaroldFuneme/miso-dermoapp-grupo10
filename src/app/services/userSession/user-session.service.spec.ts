import { TestBed } from '@angular/core/testing';

import { UserSessionService } from './user-session.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('UserSessionService', () => {
  let service: UserSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    service = TestBed.inject(UserSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return session', () => {
    service.currentSession = true as any;
    expect(service.getSession()).toBeTruthy();
  });
});
