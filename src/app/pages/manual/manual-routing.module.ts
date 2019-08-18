import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SysManualComponent } from './sys-manual/sys-manual.component';
import { AsManualComponent } from './as-manual/as-manual.component';
import { ProgramManualComponent } from './program-manual/program-manual.component';
import { DataRoomComponent } from './data-room/data-room.component';
import { ShopInfoComponent } from './shop-info/shop-info.component';
import { SPointComponent } from './s-point/s-point.component';

const routes: Routes = [{
  path: '',
  children: [{
    path: 'sys-manual',
    component: SysManualComponent,
  }, {
    path: 'as-manual',
    component: AsManualComponent,
  }, {
    path: 'program-manual',
    component: ProgramManualComponent,
  }, {
    path: 'data-room',
    component: DataRoomComponent,
  }, {
    path: 'shop-info',
    component: ShopInfoComponent,
  }, {
    path: 's-point',
    component: SPointComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualRoutingModule { }

export const routedComponents = [
  SysManualComponent,
  AsManualComponent,
  ProgramManualComponent,
  DataRoomComponent,
  ShopInfoComponent,
  SPointComponent,
];
