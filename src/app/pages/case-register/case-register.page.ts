/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterCaseService } from '../../services/registerCase/register-case.service';
import { UserSessionService } from '../../services/userSession/user-session.service';
import { v4 as uuidv4 } from 'uuid';
import { S3Service } from '../../services/s3/s3.service';


@Component({
  selector: 'app-case-register',
  templateUrl: './case-register.page.html',
  styleUrls: ['./case-register.page.scss'],
})
export class CaseRegisterPage implements OnInit {
  ACL = 'public-read';
  BUCKET_NAME = 'cases-resources';
  PATIENT_ID = '';
  NAME_CASE= '';
  file: any = '';

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
    image_selected: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private registerCaseService: RegisterCaseService,
    private userSessionService: UserSessionService,
    private s3Service: S3Service
  ) {}

  ngOnInit() {}

  goHome() {
    this.router.navigateByUrl('/home');
  }

  sendRegisterProfile() {

    this.PATIENT_ID = this.userSessionService.getSession().username;
    this.NAME_CASE = this.caseForm.value.name;
    const path_s3 = `${this.PATIENT_ID}/${this.NAME_CASE}/${this.file.name}`;
    this.caseForm.value.image_selected = path_s3;

    const params = {
      Bucket: this.BUCKET_NAME,
      Key: path_s3,
      Body: this.file,
      ACL: this.ACL
    };
    const s3 = this.s3Service.s3();
   const upload = s3.upload(params, (err, data) => {
      if (err) {
        console.log(`ERROR uploaded file named: ${params.Key} to s3. :  ${err}`);
        return;
      }
      console.log(`File uploaded successfully. ${data.Location}`);
    }).promise();

    this.registerCaseService
      .sendRegisterCase(
        this.userSessionService.getSession().username,
        this.caseForm.value
      )
      .subscribe({
        next: (res) => {
          console.log('Sended...', res);
          upload.then(()=> {
            this.goHome();
          });
        },
      });
  }

  onFileSelected(event) {
    const file: File = event.target.files[0];
    this.file = file;
    console.log(file);
  }
}
