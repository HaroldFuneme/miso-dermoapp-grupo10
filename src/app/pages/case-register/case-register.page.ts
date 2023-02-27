/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { RegisterCaseService } from '../../services/registerCase/register-case.service';
import { UserSessionService } from '../../services/userSession/user-session.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-case-register',
  templateUrl: './case-register.page.html',
  styleUrls: ['./case-register.page.scss'],
})
export class CaseRegisterPage implements OnInit {
  public imageSelected: any;

  readonly injuryTypes = {
    name: 'INJURY_TYPE',
    items: [
      'INJURY_TYPE_MACULE',
      'INJURY_TYPE_PAPULE',
      'INJURY_TYPE_PATCH',
      'INJURY_TYPE_PLAQUE',
      'INJURY_TYPE_NODULE',
      'INJURY_TYPE_BLISTER',
      'INJURY_TYPE_ULCER',
      'INJURY_TYPE_VESICLE',
    ],
  };
  readonly injuryShapes = {
    name: 'INJURY_SHAPE',
    items: [
      'INJURY_SHAPE_RING',
      'INJURY_SHAPE_DOME',
      'INJURY_SHAPE_OVAL',
      'INJURY_SHAPE_ROUND',
      'INJURY_SHAPE_INDEFINITE',
      'INJURY_SHAPE_COILED',
    ],
  };
  readonly lessionsNumber = {
    name: 'NUMBER_LESSIONS',
    items: [
      'NUMBER_LESSIONS_SOLITARY',
      'NUMBER_LESSIONS_MULTIPLE',
      'NUMBER_LESSIONS_RECURRENT',
      'NUMBER_LESSIONS_DISSEMINATED',
    ],
  };
  readonly injuryDistributions = {
    name: 'INJURY_DISTRIBUTION',
    items: [
      'INJURY_DISTRIBUTION_ASYMMETRIC',
      'INJURY_DISTRIBUTION_CONFLUENT',
      'INJURY_DISTRIBUTION_SYMMETRIC',
      'INJURY_DISTRIBUTION_SPREAD',
    ],
  };
  readonly injuryColor = {
    name: 'INJURY_COLOR',
    items: [
      'INJURY_COLOR_RED',
      'INJURY_COLOR_GREEN',
      'INJURY_COLOR_BLUE',
      'INJURY_COLOR_BLACK',
    ],
  };

  caseForm = new FormGroup({
    case_id: new FormControl(uuidv4()),
    name: new FormControl('', Validators.required),
    injury_type: new FormControl('', [Validators.required]),
    shape: new FormControl('', [Validators.required]),
    number_of_lessions: new FormControl('', [Validators.required]),
    distributions: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private registerCaseService: RegisterCaseService,
    private userSessionService: UserSessionService
  ) {}

  ngOnInit() {}

  goHome() {
    this.router.navigateByUrl('/home');
  }

  sendRegisterProfile() {
    this.registerCaseService
      .sendRegisterCase(
        this.userSessionService.getSession().username,
        this.imageSelected,
        this.caseForm.value
      )
      .subscribe({
        next: (res) => {
          console.log('Sended...', res);
          this.goHome();
        },
      });
  }

  async uploadImage() {
    console.log('uploading ...');
    this.imageSelected = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
    }).catch((e) => {
      console.log('Error uploading photo ...', e);
    });
  }
}
