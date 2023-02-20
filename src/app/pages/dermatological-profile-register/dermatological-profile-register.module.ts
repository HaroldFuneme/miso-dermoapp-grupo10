import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DermatologicalProfileRegisterPageRoutingModule } from './dermatological-profile-register-routing.module';

import { DermatologicalProfileRegisterPage } from './dermatological-profile-register.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DermatologicalProfileRegisterPageRoutingModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  declarations: [DermatologicalProfileRegisterPage]
})
export class DermatologicalProfileRegisterPageModule {}
