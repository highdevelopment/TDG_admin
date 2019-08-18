import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberComponent } from './manage/member/member.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'manage',
    component: MemberComponent,
  }, {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  }, {
    path: 'news',
    loadChildren: './news/news.module#NewsModule',
  }, {
    path: 'as',
    loadChildren: './as/as.module#AsModule',
  }, {
    path: 'manage',
    loadChildren: './manage/manage.module#ManageModule',
  }, {
    path: 'game',
    loadChildren: './game/game.module#GameModule',
  }, {
    path: 'manual',
    loadChildren: './manual/manual.module#ManualModule',
  }, {
    path: 'support',
    loadChildren: './support/support.module#SupportModule',
  }, {
    path: 'fee',
    loadChildren: './fee/fee.module#FeeModule',
  }, {
    path: 'service',
    loadChildren: './service/service.module#ServiceModule',
  }, {
    path: '',
    redirectTo: 'manage',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
