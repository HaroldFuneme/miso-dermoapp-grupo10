import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DermatologicalProfileRegisterPage } from './dermatological-profile-register.page';

const routes: Routes = [
  {
    path: '',
    component: DermatologicalProfileRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DermatologicalProfileRegisterPageRoutingModule {}
