import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import {
  TranslateModule,
  TranslateService,
  TranslateStore
} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    TranslateModule.forRoot(),
  ],
  declarations: [FolderPage],
  providers: [
    TranslateService,
    TranslateStore,
  ]
})
export class FolderPageModule {}
