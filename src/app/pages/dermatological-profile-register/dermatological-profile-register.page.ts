import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dermatological-profile-register',
  templateUrl: './dermatological-profile-register.page.html',
  styleUrls: ['./dermatological-profile-register.page.scss'],
})
export class DermatologicalProfileRegisterPage implements OnInit {



  dermatologicalForm = new FormGroup({
    phototypes: new FormControl('',[Validators.required]),
    skintone: new FormControl('',[Validators.required]),
    eyecolor: new FormControl('',[Validators.required]),
    haircoloring: new FormControl('',[Validators.required]),
    taneffect: new FormControl('',[Validators.required]),
    tolerance: new FormControl('',[Validators.required]),
  });

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  sendRegister(){
    console.log('Send register');
    console.log(this.dermatologicalForm.value);
    this.goHome();
  }

  goBack() {
    this.router.navigateByUrl('/createaccount');
  }

  goHome(){
    this.router.navigateByUrl('/home');
  }

}
