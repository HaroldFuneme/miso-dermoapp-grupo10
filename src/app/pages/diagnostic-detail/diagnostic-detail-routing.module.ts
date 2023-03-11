import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiagnosticDetailPage } from './diagnostic-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DiagnosticDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiagnosticDetailPageRoutingModule {}
