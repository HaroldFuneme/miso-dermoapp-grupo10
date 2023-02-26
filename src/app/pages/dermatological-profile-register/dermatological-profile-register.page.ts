/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { SendRegisterService } from '../../services/sendeRegister/send-register.service';
import { UserSessionService } from '../../services/userSession/user-session.service';
import { DermatologicalProfile } from '../../models/DermatologicalProfile';

@Component({
  selector: 'app-dermatological-profile-register',
  templateUrl: './dermatological-profile-register.page.html',
  styleUrls: ['./dermatological-profile-register.page.scss'],
})
export class DermatologicalProfileRegisterPage implements OnInit {
  dermatologicalForm = new FormGroup({
    photo_type: new FormControl('', [Validators.required]),
    tone_skin: new FormControl('', [Validators.required]),
    eye_color: new FormControl('', [Validators.required]),
    hair_coloring: new FormControl('', [Validators.required]),
    tan_effect: new FormControl('', [Validators.required]),
    sun_tolerance: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private sendRegisterService: SendRegisterService,
    private userSessionService: UserSessionService
  ) {}

  ngOnInit() {}

  async sendRegister() {
    const session = this.userSessionService.getSession();
    const dermaProfile: DermatologicalProfile = this.dermatologicalForm.value;
    this.sendRegisterService.send(session.username, dermaProfile).subscribe({
      next: (res) => {
        this.goHome();
      },
    });
  }

  goBack() {
    this.router.navigateByUrl('/createaccount');
  }

  goHome() {
    this.router.navigateByUrl('/home');
  }
}
