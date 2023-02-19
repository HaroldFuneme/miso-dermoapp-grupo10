import { TestBed } from '@angular/core/testing';

import { SendRegisterService } from './send-register.service';

describe('SendRegisterService', () => {
  let service: SendRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
