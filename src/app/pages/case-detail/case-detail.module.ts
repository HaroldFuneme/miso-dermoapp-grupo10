import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaseDetailPageRoutingModule } from './case-detail-routing.module';

import { CaseDetailPage } from './case-detail.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaseDetailPageRoutingModule,
    TranslateModule,
  ],
  declarations: [CaseDetailPage],
})
export class CaseDetailPageModule {}
