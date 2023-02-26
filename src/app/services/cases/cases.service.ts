/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Case {
  case_id: string;
  color: string;
  distributions: string;
  injury_type: string;
  name: string;
  number_of_lessions: string;
  patient_id: string;
  shape: string;
}

@Injectable({
  providedIn: 'root',
})
export class CasesService {
  constructor(private http: HttpClient) {}

  getCases(patientId: string) {
    const URL = `https://y3ai500geb.execute-api.us-east-1.amazonaws.com/Prod/patient/${patientId}/cases`;
    return this.http.get<Array<Case>>(URL);
  }

  getCaseDetail(patientId: string, caseId: string) {
    const URL = `https://y3ai500geb.execute-api.us-east-1.amazonaws.com/Prod/patient/${patientId}/case/${caseId}`;
    return this.http.get<Case>(URL);
  }
}
