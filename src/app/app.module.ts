import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken } from '@nebular/auth';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbIconModule, NbMenuModule, NbSidebarModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import {SifoCadAuthModule} from './auth/auth.module';
import {PaginaModule} from './pagina/pagina.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2CompleterModule } from 'ng2-completer';
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
    PaginaModule,
    Ng2SmartTableModule,
    Ng2CompleterModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: '',
          token: {
            class: NbAuthJWTToken,
            key: 'token', //este parametro indica donde buscar el token
          },
          login: {
            redirect: {
              success: '/Inicio',
              failure: 'null', //se mantiene en la misma pagina
            },
          },
          register: {
            endpoint: '/api/auth/register',
            redirect: {
              success: '/Bienvenido',
              failure: null, //se mantiene en la misma pagina.
            } 
          },
        }),
      ],
      forms: {
        login: formSetting, 
        register: formSetting,
      },
    }),
  ],
  providers: [{provide: LOCALE_ID, useValue: "es-PE" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
