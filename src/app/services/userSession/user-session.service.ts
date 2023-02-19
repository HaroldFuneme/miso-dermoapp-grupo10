import { Injectable } from '@angular/core';
import { Session } from 'src/app/models/Session';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  currentSession: Session;

  constructor() { }

  setSession(session: Session){
    this.currentSession = session;
  }

  getSession(){
    return this.currentSession;
  }
}
