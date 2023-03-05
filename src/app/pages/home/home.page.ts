import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case, CasesService } from 'src/app/services/cases/cases.service';
import { UserSessionService } from 'src/app/services/userSession/user-session.service';
import { S3Service } from '../../services/s3/s3.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  caseList: Case[] = [];
  imageUrl = '';
  imageLoaded = false;

  constructor(
    private router: Router,
    private caseService: CasesService,
    private userSessionService: UserSessionService,
    private s3Service: S3Service
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.caseService
      .getCases(this.userSessionService.getSession().username)
      .subscribe({
        next: (res) => {
          console.log(JSON.stringify(res));
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


  async checkImageExists() {

  }
}
