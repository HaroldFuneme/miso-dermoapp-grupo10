import { TestBed } from '@angular/core/testing';

import { RegisterCaseService } from './register-case.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('RegisterCaseService', () => {
  let service: RegisterCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    service = TestBed.inject(RegisterCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
