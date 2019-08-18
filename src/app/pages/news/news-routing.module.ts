import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SCacheComponent } from './s-cache/s-cache.component';
import { NoticeComponent } from './notice/notice.component';


const routes: Routes = [{
  path: '',
  children: [{
    path: 's-cache',
    component: SCacheComponent,
  }, {
    path: 'notice',
    component: NoticeComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule { }

export const routedComponents = [
  SCacheComponent,
  NoticeComponent,
];
