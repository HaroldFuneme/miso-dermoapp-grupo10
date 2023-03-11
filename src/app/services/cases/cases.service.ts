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
  image_selected: string;
}

export interface Diagnosis {
  diagnose: string;
  diagnose_id: string;
  doctor_name: string;
  doctor_id: string;
  case_id: string;
  patient_id: string;
  creation_date: string;
}

@Injectable({
  providedIn: 'root',
})
export class CasesService {
  baseURL =
    'https://y3ai500geb.execute-api.us-east-1.amazonaws.com/Prod/patient';

  constructor(private http: HttpClient) {}

  getCases(patientId: string) {
    const URL = `${this.baseURL}/${patientId}/cases`;
    return this.http.get<Array<Case>>(URL);
  }

  getCaseDetail(patientId: string, caseId: string) {
    const URL = `${this.baseURL}/${patientId}/case/${caseId}`;
    return this.http.get<Case>(URL);
  }

  updateCase(patientId: string, caseId: string, data: { status: string }) {
    const URL = `${this.baseURL}/${patientId}/case/${caseId}`;
    return this.http.put<Case>(URL, data);
  }

  getCaseDiagnosis(patientId: string, caseId: string) {
    const URL = `${this.baseURL}/${patientId}/case/${caseId}/diagnose`;
    return this.http.get<Diagnosis[]>(URL);
  }
}
