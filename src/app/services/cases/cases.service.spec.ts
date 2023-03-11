import { TestBed } from '@angular/core/testing';

import { CasesService } from './cases.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CasesService', () => {
  let service: CasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CasesService);
  });

  it('should be created', () => {
    service.getCases('test_id');
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    service.getCaseDetail('patientId', 'test_id');
    service.getCaseDiagnosis('patientId', 'test_id');
    service.updateCase('patientId', 'test_id', { status: 'new' });
    expect(service).toBeTruthy();
  });
});
