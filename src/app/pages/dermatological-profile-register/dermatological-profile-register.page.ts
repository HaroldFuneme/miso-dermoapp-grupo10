import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dermatological-profile-register',
  templateUrl: './dermatological-profile-register.page.html',
  styleUrls: ['./dermatological-profile-register.page.scss'],
})
export class DermatologicalProfileRegisterPage implements OnInit {


  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  sendRegister(){
    console.log('Send register');
    this.goHome();
  }

  goBack() {
    this.router.navigateByUrl('/createaccount');
  }

  goHome(){
    this.router.navigateByUrl('/home');
  }

}
