/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CasesService, Case } from '../../services/cases/cases.service';
import { TranslateControllerService } from '../../services/translateController/translate-controller.service';
import { UserSessionService } from '../../services/userSession/user-session.service';

@Component({
  selector: 'app-diagnostic-detail',
  templateUrl: './diagnostic-detail.page.html',
  styleUrls: ['./diagnostic-detail.page.scss'],
})
export class DiagnosticDetailPage implements OnInit {
  caseId = '';
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

  constructor(
    private route: ActivatedRoute,
    private caseService: CasesService,
    public translateController: TranslateControllerService,
    private router: Router,
    private userSessionService: UserSessionService,
  ) { }

  ngOnInit() {
    this.caseId = this.route.snapshot.params.caseId;

    this.caseService
    .getCaseDetail(
      this.userSessionService.getSession().username,
      this.caseId
    )
    .subscribe({
      next: (res) => {
        this.caseValues = res;
        console.log(res);
      },
    });
  }

  logScrolling(event) {
    console.log(event);
  }

  goBack() {
    const url = `/case-detail/${this.caseId}`;
    this.router.navigateByUrl(url);
  }

}
