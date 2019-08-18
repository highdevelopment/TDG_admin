import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { RoomsComponent } from './rooms/rooms.component';
import { DaysGameComponent } from './days-game/days-game.component';
import { DaysPracticeComponent } from './days-practice/days-practice.component';
import { BookGameComponent } from './book-game/book-game.component';
import { GameRoutingModule, routedComponents } from './game-routing.module';
import { DataTableModule } from "angular-6-datatable";

import { ThemeModule } from '../../@theme/theme.module';
import { InputfeeComponent } from './inputfee/inputfee.component';
import { SystemListComponent } from './days-game/system-list/system-list.component';
import { SaleStatusComponent } from './book-game/sale-status/sale-status.component';

import { ToasterModule } from 'angular2-toaster';
import { ChargelistComponent } from './chargelist/chargelist.component';
import { ChargeagreeComponent } from './chargeagree/chargeagree.component';
import { ChargeconfirmComponent } from './chargeagree/chargeconfirm/chargeconfirm.component';
import { NgxSpinnerModule } from 'ngx-spinner';

const components = [
  RoomsComponent,
  DaysGameComponent,
  DaysPracticeComponent,
  BookGameComponent,
];
@NgModule({
  imports: [
    ThemeModule,
    GameRoutingModule,
    Ng2SmartTableModule,
    CommonModule,
    DataTableModule,
    NgxSpinnerModule,
    ToasterModule.forRoot()
  ],
  declarations: [RoomsComponent, DaysGameComponent, DaysPracticeComponent, BookGameComponent, InputfeeComponent, SystemListComponent, SaleStatusComponent, ChargeagreeComponent, ChargeconfirmComponent,ChargelistComponent],
  entryComponents: [RoomsComponent, DaysGameComponent, DaysPracticeComponent, BookGameComponent, InputfeeComponent, SystemListComponent, SaleStatusComponent, ChargeagreeComponent, ChargeconfirmComponent,ChargelistComponent],
})
export class GameModule { }
