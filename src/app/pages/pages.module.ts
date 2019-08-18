import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
// import { DashboardModule } from './dashboard/dashboard.module';
import { ManageModule } from './manage/manage.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { NgxSpinnerModule } from 'ngx-spinner';


const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    // DashboardModule,
    MiscellaneousModule,
    ManageModule,
    NgxSpinnerModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
