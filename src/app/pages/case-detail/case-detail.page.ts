/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonModal } from '@ionic/angular';
import { Case, CasesService } from 'src/app/services/cases/cases.service';
import { TranslateControllerService } from 'src/app/services/translateController/translate-controller.service';
import { UserSessionService } from 'src/app/services/userSession/user-session.service';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-detail.page.html',
  styleUrls: ['./case-detail.page.scss'],
})
export class CaseDetailPage implements OnInit {
  readonly caseProperties = [
    {
      id: 'injury_type',
      label: 'INJURY_TYPE_LABEL',
      title: 'INJURY_TYPE',
      icon: 'bandage',
    },
    {
      id: 'shape',
      label: 'INJURY_SHAPE_LABEL',
      title: 'INJURY_SHAPE',
      icon: 'crop',
    },
    {
      id: 'number_of_lessions',
      label: 'NUMBER_LESSIONS_LABEL',
      title: 'NUMBER_LESSIONS',
      icon: 'dice',
    },
    {
      id: 'distributions',
      label: 'INJURY_DISTRIBUTION_LABEL',
      title: 'INJURY_DISTRIBUTION',
      icon: 'apps',
    },
    {
      id: 'color',
      label: 'INJURY_COLOR_LABEL',
      title: 'INJURY_COLOR',
      icon: 'color-palette',
    },
  ];

  propertyIndexSelected = 0;
  caseValues: Case = {
    case_id: '',
    color: '',
    distributions: '',
    injury_type: '',
    name: '',
    number_of_lessions: '',
    patient_id: '',
    shape: '',
    image_selected: '',
  };

  caseDiagnosis = [];

  constructor(
    private route: ActivatedRoute,
    private userSessionService: UserSessionService,
    private caseService: CasesService,
    private alertController: AlertController,
    private router: Router,
    public translateController: TranslateControllerService
  ) {}

  ngOnInit() {
    this.caseService
      .getCaseDetail(
        this.userSessionService.getSession().username,
        this.route.snapshot.params.id
      )
      .subscribe({
        next: (res) => {
          this.caseValues = res;
        },
      });
    this.caseService
      .getCaseDiagnosis(
        this.userSessionService.getSession().username,
        this.route.snapshot.params.id
      )
      .subscribe({
        next: (res) => {
          this.caseDiagnosis = res;
        },
      });
  }

  async requestDoctorDiagnosis() {
    this.caseService
      .updateCase(
        this.userSessionService.getSession().username,
        this.route.snapshot.params.id,
        { status: 'Available' }
      )
      .subscribe({
        next: async (res) => {
          const alert = await this.alertController.create({
            header: await this.translateController.getTranslation(
              'DIAGNOSIS_TITLE'
            ),
            message: await this.translateController.getTranslation(
              'DIAGNOSTIC_CREATED'
            ),
            buttons: [
              { text: await this.translateController.getTranslation('CANCEL') },
              {
                text: await this.translateController.getTranslation('CONTINUE'),
              },
            ],
          });

          await alert.present();
        },
      });
  }

  requestOntologyDiagnosis() {
    this.caseDiagnosis.push({});
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: await this.translateController.getTranslation('DIAGNOSIS_BUTTON'),
      message: await this.translateController.getTranslation(
        'DIAGNOSIS_LEGAL_TERMS'
      ),
      buttons: [
        { text: await this.translateController.getTranslation('CANCEL') },
        {
          text: await this.translateController.getTranslation('CONTINUE'),
          handler: (alertData) => {
            if (alertData === 'doctor') {
              this.requestDoctorDiagnosis();
            } else {
              this.requestOntologyDiagnosis();
            }
          },
        },
      ],
      inputs: [
        {
          label: 'Doctor',
          type: 'radio',
          value: 'doctor',
          placeholder: 'esdafsaf',
        },
        {
          label: 'Ontologico',
          type: 'radio',
          value: 'ontologico',
        },
      ],
    });

    await alert.present();
  }

  goBack() {
    this.router.navigateByUrl('/home');
  }
}
