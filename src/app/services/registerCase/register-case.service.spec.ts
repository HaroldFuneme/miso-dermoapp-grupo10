import { TestBed } from '@angular/core/testing';

import { RegisterCaseService } from './register-case.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegisterCaseService', () => {
  let service: RegisterCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RegisterCaseService);
  });

  it('should be created', () => {
    service.sendRegisterCase('test_id', 'fie');
    expect(service).toBeTruthy();
  });

  it('should uploadFile', () => {
    service.uploadFile('file');
    expect(service).toBeTruthy();
  });
});
