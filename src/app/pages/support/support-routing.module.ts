import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaqComponent } from './faq/faq.component';
import { QaComponent } from './qa/qa.component';

const routes: Routes = [{
  path: '',
  children: [{
    path: 'faq/:id',
    component: FaqComponent,
  }, {
    path: 'qa',
    component: QaComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportRoutingModule { }

export const routedComponents = [
  FaqComponent,
  QaComponent,
];
