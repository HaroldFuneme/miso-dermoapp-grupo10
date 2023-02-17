import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaseRegisterPage } from './case-register.page';

const routes: Routes = [
  {
    path: '',
    component: CaseRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaseRegisterPageRoutingModule {}
