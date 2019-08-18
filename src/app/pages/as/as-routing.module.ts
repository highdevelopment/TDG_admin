import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsListComponent } from './as-list/as-list.component';
import { AsReqComponent } from './as-req/as-req.component';

const routes: Routes = [{
  path: '',
  children: [{
    path: 'as-list',
    component: AsListComponent,
  }, {
    path: 'as-req',
    component: AsReqComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsRoutingModule { }

export const routedComponents = [
  AsListComponent,
  AsReqComponent,
];
