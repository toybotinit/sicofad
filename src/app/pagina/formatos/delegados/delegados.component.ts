import { Component, OnInit,Input, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'sicofad-delegados',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './delegados.component.html',
  styleUrls: ['./delegados.component.scss']
})
export class DelegadosComponent implements OnInit {
  source: LocalDataSource;
  today: number = Date.now();

  codigoCurso: FormControl;
  nombreCurso: FormControl;

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    hideSubHeader: false,
    columns: {
      codigo: {
        title: 'Codigo',
        type: 'number',
        editable: false,
        addable: false,
      },
      nombre: {
        title: 'Nombre',
        type: 'string',
        editable: false,
        addable: false,
      },
      email: {
        title: 'Correo',
        type: 'string',
        editable: false,
        addable: false,
      },
      telefono: {
        title: 'Telefono',
        type: 'number',
        editable: false,
        addable: false,
      },
      celular: {
        title: 'Celular',
        type: 'number',
        editable: false,
        addable: false,
      },
      direccion: {
        title: 'Direccion',
        type: 'string',
        editable: false,
        addable: false,
      },
    },

    noDataMessage: 'No se encontraron datos',
  };
  constructor() {

  this.codigoCurso = new FormControl();
  this.nombreCurso = new FormControl();
   
  }

  ngOnInit(): void {
    this.establecerValidadores();
  }


  private establecerValidadores(){
    this.codigoCurso.setValidators([Validators.required, Validators.minLength(7), Validators.maxLength(7)]);
    this.nombreCurso.setValidators([Validators.required, Validators.minLength(10)]);
  }

}
