import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { CommonModule } from '@angular/common';
import { SCacheComponent } from './s-cache/s-cache.component';
import { NoticeComponent } from './notice/notice.component';
import { NewsRoutingModule, routedComponents } from './news-routing.module';

import { ThemeModule } from '../../@theme/theme.module';
import { NgxSpinnerModule } from 'ngx-spinner';

const components = [
  SCacheComponent,
  NoticeComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    NewsRoutingModule,
    Ng2SmartTableModule,
    CommonModule,
    NgxSpinnerModule
  ],
  declarations: [SCacheComponent, NoticeComponent, ...routedComponents]
})
export class NewsModule { }
