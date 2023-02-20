import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaseRegisterPageRoutingModule } from './case-register-routing.module';

import { CaseRegisterPage } from './case-register.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CaseRegisterPageRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
  declarations: [CaseRegisterPage],
})
export class CaseRegisterPageModule {}
