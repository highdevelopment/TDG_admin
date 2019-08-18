import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoundingDayComponent } from './rounding-day/rounding-day.component';
import { RoundingSumComponent } from './rounding-sum/rounding-sum.component';
import { MemberComponent } from './member/member.component';
import { MeetingComponent } from './meeting/meeting.component';
import { PaymentComponent } from './payment/payment.component';
import { ShopNoticeComponent } from './shop-notice/shop-notice.component';
import { HomePictureComponent } from './home-picture/home-picture.component';
import { ShopMeetingComponent } from './shop-meeting/shop-meeting.component';
import { RegmemberComponent } from './regmember/regmember.component';
import { EditmemberComponent } from './editmember/editmember.component';
import { RegnoticeComponent } from './regnotice/regnotice.component';
import { EditnoticeComponent } from './editnotice/editnotice.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [{
  path: '',
  children: [{
    path: 'rounding-day',
    component: RoundingDayComponent,
  }, {
    path: 'rounding-sum',
    component: RoundingSumComponent,
  }, {
    path: 'member',
    component: MemberComponent,
  }, {
    path: 'system',
    component: ShopMeetingComponent,
  }, {
    path: 'meeting',
    component: MeetingComponent,
  }, {
    path: 'payment',
    component: PaymentComponent,
  }, {
    path: 'notice',
    component: ShopNoticeComponent,
  }, {
    path: 'home-picture',
    component: HomePictureComponent,
  }, {
    path: 'regmember',
    component: RegmemberComponent,
  }, {
    path: 'regmember/:id',
    component: RegmemberComponent,
  }, {
    path: 'editmember/:id',
    component: EditmemberComponent,
  }, {
    path: 'regnotice',
    component: RegnoticeComponent,
  }, {
    path: 'editnotice/:id',
    component: EditnoticeComponent,
  }, {
    path: 'customer',
    component: CustomerComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRoutingModule { }

export const routedComponents = [
    RoundingDayComponent,
    RoundingSumComponent,
    MemberComponent,
    MeetingComponent,
    PaymentComponent,
    ShopNoticeComponent,
    HomePictureComponent,
    ShopMeetingComponent,
    RegmemberComponent,
    EditmemberComponent,
    RegnoticeComponent,
    EditnoticeComponent,
];
