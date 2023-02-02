import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  listDemoUser: User [] = [];

  constructor() {
    console.log('Servicio Demo activo!!');
    const user1 = new User('Pepe', 14);
    const user2 = new User('Juan', 24);
    const user3 = new User('Pepa', 34);
    this.listDemoUser.push(user1, user2, user3);
  }
}
