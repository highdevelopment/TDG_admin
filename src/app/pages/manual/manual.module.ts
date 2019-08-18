import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SysManualComponent } from './sys-manual/sys-manual.component';
import { AsManualComponent } from './as-manual/as-manual.component';
import { ProgramManualComponent } from './program-manual/program-manual.component';
import { DataRoomComponent } from './data-room/data-room.component';
import { ShopInfoComponent } from './shop-info/shop-info.component';
import { SPointComponent } from './s-point/s-point.component';
import { ManualRoutingModule, routedComponents } from './manual-routing.module';

import { ThemeModule } from '../../@theme/theme.module';
import { NgxSpinnerModule } from 'ngx-spinner';

const components = [
  SysManualComponent,
  AsManualComponent,
  ProgramManualComponent,
  DataRoomComponent,
  ShopInfoComponent,
  SPointComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    ManualRoutingModule,
    CommonModule,
    NgxSpinnerModule
  ],
  declarations: [
    SysManualComponent,
    AsManualComponent,
    ProgramManualComponent,
    DataRoomComponent,
    ShopInfoComponent,
    SPointComponent
  ]
})
export class ManualModule { }
