import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqComponent } from './faq/faq.component';
import { QaComponent } from './qa/qa.component';
import { SupportRoutingModule, routedComponents } from './support-routing.module';

import { ThemeModule } from '../../@theme/theme.module';
import { DataTableModule } from "angular-6-datatable";
import { SaveconfirmComponent } from './faq/saveconfirm/saveconfirm.component';

import { NgxSpinnerModule } from 'ngx-spinner';

const components = [
  FaqComponent,
  QaComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    SupportRoutingModule,
    CommonModule,
    DataTableModule,
    NgxSpinnerModule
  ],
  declarations: [FaqComponent, QaComponent, SaveconfirmComponent],
  entryComponents: [
    FaqComponent,
    QaComponent,
    SaveconfirmComponent
  ]
})
export class SupportModule { }
