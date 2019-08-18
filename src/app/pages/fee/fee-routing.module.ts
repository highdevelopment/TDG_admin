import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeeMenuComponent } from './fee-menu/fee-menu.component';
import { FeeSearchComponent } from './fee-search/fee-search.component';
import { FeeAmountComponent } from './fee-amount/fee-amount.component';
import { HistoryCalendarComponent } from './history-calendar/history-calendar.component';
import { HistoryListComponent } from './history-list/history-list.component';


const routes: Routes = [{
  path: '',
  children: [{
    path: 'fee-menu',
    component: FeeMenuComponent,
  }, {
    path: 'fee-search',
    component: FeeSearchComponent,
  }, {
    path: 'fee-amount',
    component: FeeAmountComponent,
  }, {
    path: 'history-calendar',
    component: HistoryCalendarComponent,
  }, {
    path: 'history-list',
    component: HistoryListComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeeRoutingModule { }

export const routedComponents = [
  FeeMenuComponent,
  FeeSearchComponent,
  FeeAmountComponent,
  HistoryCalendarComponent,
  HistoryListComponent,
];
