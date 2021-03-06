/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NewsModule } from './pages/news/news.module';
// import { ManageModule } from './pages/manage/manage.module';
// import { GameModule } from './pages/game/game.module';
// import { ManualModule } from './pages/manual/manual.module';
// import { SupportModule } from './pages/support/support.module';
// import { FeeModule } from './pages/fee/fee.module';
// import { AsModule } from './pages/as/as.module';
import { AuthModule } from './@auth/@auth.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    NgxSpinnerModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    // NewsModule,
    // ManageModule,
    // GameModule,
    // ManualModule,
    // SupportModule,
    // FeeModule,
    // AsModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {
}
