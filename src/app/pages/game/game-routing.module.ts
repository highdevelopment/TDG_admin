import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomsComponent } from './rooms/rooms.component';
import { DaysGameComponent } from './days-game/days-game.component';
import { DaysPracticeComponent } from './days-practice/days-practice.component';
import { BookGameComponent } from './book-game/book-game.component';
import { InputfeeComponent } from './inputfee/inputfee.component';
import { ChargelistComponent } from './chargelist/chargelist.component';
import { ChargeagreeComponent } from './chargeagree/chargeagree.component';

const routes: Routes = [{
  path: '',
  children: [{
    path: 'rooms',
    component: RoomsComponent,
  }, {
    path: 'days-game',
    component: DaysGameComponent,
  }, {
    path: 'days-practice',
    component: DaysPracticeComponent,
  }, {
    path: 'book-game',
    component: BookGameComponent,
  }, {
    path: 'inputFee/:id',
    component: InputfeeComponent,
  }, {
    path: 'chargelist',
    component: ChargelistComponent,
  }, {
    path: 'chargeagree',
    component: ChargeagreeComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule { }

export const routedComponents = [
  RoomsComponent,
  DaysGameComponent,
  DaysPracticeComponent,
  BookGameComponent,
  InputfeeComponent,
];
