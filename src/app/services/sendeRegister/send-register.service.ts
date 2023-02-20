/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { DermatologicalProfile } from '../../models/DermatologicalProfile';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendRegisterService {



  constructor(
    private http: HttpClient
  ) { }

  send(id: string, dermaProfile: DermatologicalProfile){
    const urlDermaProfile = `https://y3ai500geb.execute-api.us-east-1.amazonaws.com/Prod/patient/${id}/profile`;
    return this.http.post(urlDermaProfile, dermaProfile);;
  }
}
