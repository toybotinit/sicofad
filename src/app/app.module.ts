import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import {SifoCadAuthModule} from './auth/auth.module';
const formSetting: any = {
  redirectDelay: 0,
  showMessage: {
    success: true,
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    AppRoutingModule,
    HttpClientModule,
    SifoCadAuthModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: '',
          login: {
            endpoint: '/api/auth/login',
          },
          register: {
            endpoint: '/api/auth/register',
          },
        }),
      ],
      forms: {
        login: formSetting, 
        register: formSetting,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
