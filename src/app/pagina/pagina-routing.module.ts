import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NbAuthComponent} from '@nebular/auth';
import { InicioComponent } from '../pagina/inicio/inicio.component';
import { DelegadosComponent } from './formatos/delegados/delegados.component';
import { InformeFinDeCicloComponent } from './formatos/informe-fin-de-ciclo/informe-fin-de-ciclo.component';
import { ProfesoresComponent } from './profesores/profesores.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      {
        path: 'Formatos',
        children: [
          {
            path: 'delegados',
            component: DelegadosComponent,
          },
          {
            path: 'informes',
            component: InformeFinDeCicloComponent,
          },
      ]
      },
      {
        path: 'Profesores',
        component: ProfesoresComponent,
      },
      
    ]
 
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaRoutingModule {
}