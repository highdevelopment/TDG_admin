import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorseregComponent } from './corsereg/corsereg.component';
import { CorselistComponent } from './corselist/corselist.component';
import { CorsedelComponent } from './corselist/corsedel/corsedel.component';
import { ManuallistComponent } from './manuallist/manuallist.component';
import { ManualdetailComponent } from './manualdetail/manualdetail.component';
import { ManualupdateComponent } from './manualupdate/manualupdate.component';
import { ManualregComponent } from './manualreg/manualreg.component';

import { ServiceRoutingModule, routedComponents } from './service-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { ThemeModule } from '../../@theme/theme.module';
import { DataTableModule } from "angular-6-datatable";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsernoticeregComponent } from './usernoticereg/usernoticereg.component';
import { UsernoticeeditComponent } from './usernoticeedit/usernoticeedit.component';
import { UsernoticelistComponent } from './usernoticelist/usernoticelist.component';
import { EventregComponent } from './eventreg/eventreg.component';
import { EventeditComponent } from './eventedit/eventedit.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { CorseregconfirmComponent } from './corsereg/corseregconfirm/corseregconfirm.component';
import { EventeditconfirmComponent } from './eventedit/eventeditconfirm/eventeditconfirm.component';
import { EventregconfirmComponent } from './eventreg/eventregconfirm/eventregconfirm.component';
import { ManualregconfirmComponent } from './manualreg/manualregconfirm/manualregconfirm.component';
import { ManualupdateconfirmComponent } from './manualupdate/manualupdateconfirm/manualupdateconfirm.component';
import { UsernoticeeditconfirmComponent } from './usernoticeedit/usernoticeeditconfirm/usernoticeeditconfirm.component';
import { UsernoticeregconfirmComponent } from './usernoticereg/usernoticeregconfirm/usernoticeregconfirm.component';
import { EventdelconfirmComponent } from './eventlist/eventdelconfirm/eventdelconfirm.component';
import { UsernoticedelconfirmComponent } from './usernoticeedit/usernoticedelconfirm/usernoticedelconfirm.component';
import { ManualdelconfirmComponent } from './manualupdate/manualdelconfirm/manualdelconfirm.component';
import { CorseeditComponent } from './corseedit/corseedit.component';
import { CorseeditconfirmComponent } from './corseedit/corseeditconfirm/corseeditconfirm.component';
import { PersonalquestionComponent } from './personalquestion/personalquestion.component';
import { UserfaqComponent } from './userfaq/userfaq.component';
import { ManagerfaqComponent } from './managerfaq/managerfaq.component';
import { ManagerqaComponent } from './managerqa/managerqa.component';
import { PersonalquestiondetailComponent } from './personalquestiondetail/personalquestiondetail.component';
import { QuestiondelComponent } from './personalquestiondetail/questiondel/questiondel.component';
import { QuestionregComponent } from './questionreg/questionreg.component';
import { QuestioneditComponent } from './questionedit/questionedit.component';
import { QeditconfirmComponent } from './questionedit/qeditconfirm/qeditconfirm.component';
import { QregconfirmComponent } from './questionreg/qregconfirm/qregconfirm.component';

import { NgxSpinnerModule } from 'ngx-spinner';

const components = [
  CorseregComponent, CorselistComponent, CorsedelComponent, ManuallistComponent, ManualdetailComponent, ManualupdateComponent, ManualregComponent, CorseregconfirmComponent, EventeditconfirmComponent, EventregconfirmComponent,
  ManualregconfirmComponent, ManualupdateconfirmComponent, UsernoticeeditconfirmComponent, UsernoticeregconfirmComponent
];

@NgModule({
  imports: [
    ThemeModule,
    ServiceRoutingModule,
    CommonModule,
    RouterModule,
    DataTableModule,
    ReactiveFormsModule, 
    FormsModule,
    NgxSpinnerModule
  ],
  declarations: [CorseregComponent, CorselistComponent, CorsedelComponent, ManuallistComponent, ManualdetailComponent, ManualupdateComponent, ManualregComponent, UsernoticeregComponent, UsernoticeeditComponent, UsernoticelistComponent, EventregComponent, EventeditComponent, EventlistComponent, CorseregconfirmComponent, EventeditconfirmComponent, EventregconfirmComponent, ManualregconfirmComponent, ManualupdateconfirmComponent, UsernoticeeditconfirmComponent, UsernoticeregconfirmComponent, CorseregconfirmComponent, EventeditconfirmComponent, EventregconfirmComponent,
    ManualregconfirmComponent, ManualupdateconfirmComponent, UsernoticeeditconfirmComponent, UsernoticeregconfirmComponent, EventdelconfirmComponent, EventdelconfirmComponent, UsernoticedelconfirmComponent, UsernoticedelconfirmComponent, ManualdelconfirmComponent, ManualdelconfirmComponent, CorseeditComponent, CorseeditconfirmComponent, PersonalquestionComponent, UserfaqComponent, ManagerfaqComponent, ManagerqaComponent, PersonalquestiondetailComponent, QuestiondelComponent, QuestionregComponent, QuestioneditComponent, QeditconfirmComponent, QregconfirmComponent],
  entryComponents: [CorseregComponent, CorselistComponent, CorsedelComponent, ManuallistComponent, 
    ManualdetailComponent, ManualupdateComponent, ManualregComponent, CorseregconfirmComponent, EventeditconfirmComponent, EventregconfirmComponent,
    ManualregconfirmComponent, ManualupdateconfirmComponent, UsernoticeeditconfirmComponent, QuestiondelComponent,PersonalquestiondetailComponent,
    UsernoticeregconfirmComponent, EventdelconfirmComponent, UsernoticedelconfirmComponent, ManualdelconfirmComponent,CorseeditconfirmComponent,CorseeditComponent,
    QregconfirmComponent, QeditconfirmComponent
  ]
})
export class ServiceModule { }
