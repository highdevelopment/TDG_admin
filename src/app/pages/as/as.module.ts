import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsListComponent } from './as-list/as-list.component';
import { AsReqComponent } from './as-req/as-req.component';
import { AsRoutingModule, routedComponents } from './as-routing.module';

import { ThemeModule } from '../../@theme/theme.module';

const components = [
  AsListComponent,
  AsReqComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    AsRoutingModule,
    CommonModule
  ],
  declarations: [AsListComponent, AsReqComponent]
})
export class AsModule { }
