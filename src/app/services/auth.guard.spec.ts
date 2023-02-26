import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Auth } from 'aws-amplify';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created and handle error', () => {
    guard.canActivate({} as any, {} as any);
    expect(guard).toBeTruthy();
  });

  it('should be created and return true', () => {
    spyOn(Auth, 'currentSession').and.returnValue(
      Promise.resolve({ user: {} } as any)
    );
    expect(guard.canActivate({} as any, {} as any)).toBeTruthy();
  });
});
