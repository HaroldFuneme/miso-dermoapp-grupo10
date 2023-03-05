import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterCaseService {

  constructor(
    private http: HttpClient
  ) { }


  sendRegisterCase(id: any, form: any){
    const urlRegisterProfile = `https://y3ai500geb.execute-api.us-east-1.amazonaws.com/Prod/patient/${id}/case`;
    //this.uploadFile(file);
    return this.http.post(urlRegisterProfile, form);
  }


  uploadFile(file: any): Observable<any> {
    const formData = new FormData();
    formData.append('photo', file);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post('https://servidor.com/upload', formData, { headers });
  }
}
