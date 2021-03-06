import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbLayoutModule, NbMenuModule, NbProgressBarModule, NbRadioModule, NbSelectModule, NbSidebarModule, NbSpinnerModule, NbTabsetModule, NbTreeGridModule, NbUserModule } from '@nebular/theme';
import { PaginaRoutingModule } from './pagina-routing.module';
import { FooterComponent } from './footer/footer.component';
import { DelegadosComponent } from './formatos/delegados/delegados.component';
import { SilabosComponent } from './formatos/silabos/silabos.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2CompleterModule } from 'ng2-completer';
import { ReactiveFormsModule } from '@angular/forms';
import { InformeFinDeCicloComponent } from './formatos/informe-fin-de-ciclo/informe-fin-de-ciclo.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [HeaderComponent, InicioComponent, FooterComponent, DelegadosComponent, SilabosComponent, BienvenidaComponent, InformeFinDeCicloComponent, UsuariosComponent,],
  imports: [
    CommonModule,
    NbUserModule,
    NbLayoutModule,
    PaginaRoutingModule,
    NbActionsModule,
    NbIconModule,
    NbMenuModule,
    NbSidebarModule,
    NbCardModule,
    NbTreeGridModule,
    NbInputModule,
    NbTabsetModule,
    Ng2SmartTableModule,
    Ng2CompleterModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbSelectModule,
    NbProgressBarModule,
    NbRadioModule,
    NbSpinnerModule,
  ],
})
export class PaginaModule { }
