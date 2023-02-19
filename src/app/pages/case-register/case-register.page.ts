import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
// INTAL ionic cordova plugin add cordova-plugin-camera
// or
//npm install @ionic-native/camera
@Component({
  selector: 'app-case-register',
  templateUrl: './case-register.page.html',
  styleUrls: ['./case-register.page.scss'],
})
export class CaseRegisterPage implements OnInit {
  public pic: any;

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
    name: new FormControl('', Validators.required),
    injuryType: new FormControl('', [Validators.required]),
    injuryShape: new FormControl('', [Validators.required]),
    lessionsNumber: new FormControl('', [Validators.required]),
    injuryDistribution: new FormControl('', [Validators.required]),
    injuryColor: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {}

  goHome() {
    this.router.navigateByUrl('/home');
  }

  onSubmit() {
    console.log(this.caseForm.value);
  }

  uploadImage(){
    console.log('uploading ...');
  }

}
