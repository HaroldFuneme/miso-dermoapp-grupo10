import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SendRegisterService } from './send-register.service';
import { HttpClientModule } from '@angular/common/http';

describe('SendRegisterService', () => {
  let service: SendRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    service = TestBed.inject(SendRegisterService);
  });

  it('should be created', () => {
    service.send('test_id', {});
    expect(service).toBeTruthy();
  });
});
