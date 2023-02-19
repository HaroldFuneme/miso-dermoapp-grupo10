import { TestBed } from '@angular/core/testing';

import { RegisterCaseService } from './register-case.service';

describe('RegisterCaseService', () => {
  let service: RegisterCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
