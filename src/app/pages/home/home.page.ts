import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case, CasesService } from 'src/app/services/cases/cases.service';
import { UserSessionService } from 'src/app/services/userSession/user-session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  caseList: Case[] = [];

  constructor(
    private router: Router,
    private caseService: CasesService,
    private userSessionService: UserSessionService
  ) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.caseService
      .getCases(this.userSessionService.getSession().username)
      .subscribe({
        next: (res) => {
          this.caseList = res;
        },
      });
  }

  goCaseRegister() {
    this.router.navigateByUrl('/case-register');
  }

  goBack() {
    this.router.navigateByUrl('/start');
  }
}
