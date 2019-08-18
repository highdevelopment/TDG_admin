import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeeMenuComponent } from './fee-menu/fee-menu.component';
import { FeeSearchComponent } from './fee-search/fee-search.component';
import { FeeAmountComponent } from './fee-amount/fee-amount.component';
import { HistoryCalendarComponent } from './history-calendar/history-calendar.component';
import { HistoryListComponent } from './history-list/history-list.component';
import { FeeRoutingModule, routedComponents } from './fee-routing.module';
import { DataTableModule } from "angular-6-datatable";
import { NgxEchartsModule } from 'ngx-echarts';
import { EchartsBarComponent } from './fee-menu/echarts-bar.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';

import { ThemeModule } from '../../@theme/theme.module';
import { FeeDetailComponent } from './fee-menu/fee-detail/fee-detail.component';
import { NgxSpinnerModule } from 'ngx-spinner';

const components = [
  FeeMenuComponent,
  FeeSearchComponent,
  FeeAmountComponent,
  HistoryCalendarComponent,
  HistoryListComponent,
  EchartsBarComponent,
];
@NgModule({
  imports: [
    ThemeModule,
    FeeRoutingModule,
    CommonModule,
    DataTableModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,
    NgxSpinnerModule
  ],
  declarations: [
    FeeMenuComponent,
    FeeSearchComponent,
    FeeAmountComponent,
    HistoryCalendarComponent,
    HistoryListComponent,
    EchartsBarComponent,
    FeeDetailComponent
  ],
  entryComponents: [
    EchartsBarComponent,
    FeeDetailComponent
  ],
})
export class FeeModule { }
