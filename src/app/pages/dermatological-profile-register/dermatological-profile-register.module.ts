import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DermatologicalProfileRegisterPageRoutingModule } from './dermatological-profile-register-routing.module';

import { DermatologicalProfileRegisterPage } from './dermatological-profile-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DermatologicalProfileRegisterPageRoutingModule
  ],
  declarations: [DermatologicalProfileRegisterPage]
})
export class DermatologicalProfileRegisterPageModule {}
