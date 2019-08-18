import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorseregComponent } from './corsereg/corsereg.component';
import { CorselistComponent } from './corselist/corselist.component';
import { CorseeditComponent } from './corseedit/corseedit.component';
import { ManuallistComponent } from './manuallist/manuallist.component';
import { ManualdetailComponent } from './manualdetail/manualdetail.component';
import { ManualupdateComponent } from './manualupdate/manualupdate.component';
import { ManualregComponent } from './manualreg/manualreg.component';
import { UsernoticeregComponent } from './usernoticereg/usernoticereg.component';
import { UsernoticeeditComponent } from './usernoticeedit/usernoticeedit.component';
import { UsernoticelistComponent } from './usernoticelist/usernoticelist.component';
import { EventregComponent } from './eventreg/eventreg.component';
import { EventeditComponent } from './eventedit/eventedit.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { PersonalquestionComponent } from './personalquestion/personalquestion.component';
import { UserfaqComponent } from './userfaq/userfaq.component';
import { ManagerfaqComponent } from './managerfaq/managerfaq.component';
import { ManagerqaComponent } from './managerqa/managerqa.component';
import { PersonalquestiondetailComponent } from './personalquestiondetail/personalquestiondetail.component';
import { QuestionregComponent } from './questionreg/questionreg.component';
import { QuestioneditComponent } from './questionedit/questionedit.component';

const routes: Routes = [{
  path: '',
  children: [{
    path: 'coursereg',
    component: CorseregComponent,
  }, {
    path: 'courselist',
    component: CorselistComponent,
  }, {
    path: 'courseedit/:id',
    component: CorseeditComponent,
  }, {
    path: 'manuallist',
    component: ManuallistComponent,
  }, {
    path: 'manualdetail/:id',
    component: ManualdetailComponent,
  }, {
    path: 'manualupdate/:id',
    component: ManualupdateComponent,
  }, {
    path: 'manualreg',
    component: ManualregComponent,
  }, {
    path: 'usernoticereg',
    component: UsernoticeregComponent,
  }, {
    path: 'usernoticeedit/:id',
    component: UsernoticeeditComponent,
  }, {
    path: 'usernoticelist',
    component: UsernoticelistComponent,
  }, {
    path: 'eventreg',
    component: EventregComponent,
  }, {
    path: 'eventedit/:id',
    component: EventeditComponent,
  }, {
    path: 'eventlist',
    component: EventlistComponent,
  }, {
    path: 'personalquestion',
    component: PersonalquestionComponent,
  }, {
    path: 'userfaq',
    component: UserfaqComponent,
  }, {
    path: 'managerfaq',
    component: ManagerfaqComponent,
  }, {
    path: 'managerqa',
    component: ManagerqaComponent,
  }, {
    path: 'questiondetail/:id',
    component: PersonalquestiondetailComponent,
  }, {
    path: 'questionedit/:id',
    component: QuestioneditComponent,
  }, {
    path: 'questionreg/:id',
    component: QuestionregComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceRoutingModule { }

export const routedComponents = [
    CorseregComponent, CorselistComponent, ManuallistComponent, ManualdetailComponent, ManualupdateComponent, ManualregComponent
];
