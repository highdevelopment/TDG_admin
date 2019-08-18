import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { RoundingDayComponent } from './rounding-day/rounding-day.component';
import { RoundingSumComponent } from './rounding-sum/rounding-sum.component';
import { MemberComponent } from './member/member.component';
import { MeetingComponent } from './meeting/meeting.component';
import { PaymentComponent } from './payment/payment.component';
import { ShopNoticeComponent } from './shop-notice/shop-notice.component';
import { HomePictureComponent } from './home-picture/home-picture.component';
import { ShopMeetingComponent } from './shop-meeting/shop-meeting.component';
import { ManageRoutingModule, routedComponents } from './manage-routing.module';
import { EchartsLineComponent } from './rounding-day/echarts-line.component';
import { RouterModule, Routes } from '@angular/router';

import { ThemeModule } from '../../@theme/theme.module';
import { RegmemberComponent } from './regmember/regmember.component';
import { DataTableModule } from "angular-6-datatable";
import { EditmemberComponent } from './editmember/editmember.component';
import { RegnoticeComponent } from './regnotice/regnotice.component';
import { EditnoticeComponent } from './editnotice/editnotice.component';
import { CustomerComponent } from './customer/customer.component';
import { UpdateroleComponent } from './customer/updaterole/updaterole.component';
import { ConfirmComponent } from './editmember/confirm/confirm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditconfirmComponent } from './editmember/editconfirm/editconfirm.component';
import { RegconfirmComponent } from './regmember/regconfirm/regconfirm.component';
import { NoticedelconfirmComponent } from './editnotice/noticedelconfirm/noticedelconfirm.component';
import { NgxSpinnerModule } from 'ngx-spinner';

const components = [
    RoundingDayComponent,
    RoundingSumComponent,
    MemberComponent,
    MeetingComponent,
    PaymentComponent,
    ShopNoticeComponent,
    HomePictureComponent,
    ShopMeetingComponent,
    EchartsLineComponent,
    RegmemberComponent,
    EditmemberComponent,
    RegnoticeComponent,
    EditnoticeComponent,
];
@NgModule({
  imports: [
    ThemeModule,
    ManageRoutingModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,
    Ng2SmartTableModule,
    CommonModule,
    RouterModule,
    DataTableModule,
    ReactiveFormsModule, 
    FormsModule,
    NgxSpinnerModule
  ],
  declarations: [
    RoundingDayComponent,
    RoundingSumComponent,
    MemberComponent,
    MeetingComponent,
    PaymentComponent,
    ShopNoticeComponent,
    HomePictureComponent,
    ShopMeetingComponent,
    EchartsLineComponent,
    RegmemberComponent,
    EditmemberComponent,
    RegnoticeComponent,
    EditnoticeComponent,
    CustomerComponent,
    UpdateroleComponent,
    ConfirmComponent,
    EditconfirmComponent,
    RegconfirmComponent,
    NoticedelconfirmComponent
  ],
  entryComponents: [
    UpdateroleComponent,
    ConfirmComponent,
    RegconfirmComponent,
    EditconfirmComponent,
    NoticedelconfirmComponent
  ]
})
export class ManageModule { }
