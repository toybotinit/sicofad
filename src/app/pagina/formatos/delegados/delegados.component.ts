import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit,Input, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { Curso } from 'src/app/shared/curso';
import {DELEGADOS} from 'src/app/shared/delegados';


@Component({
  selector: 'sicofad-delegados',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './delegados.component.html',
  styleUrls: ['./delegados.component.scss']
})
export class DelegadosComponent implements OnInit {
  source: LocalDataSource;

  today: number = Date.now();
  curso: Curso;
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
  Formato2Form: FormGroup;
  fechaActual: number = Date.now();
  constructor() {
  }

  ngOnInit(): void {
   this.Formato2Form = new FormGroup({
    codigoCurso: new FormControl('', [
      Validators.required,
      Validators.pattern('[1-9]{7}')
    ]),
    nombreCurso: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    nombreDocente: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    grupo: new FormControl('', [
      Validators.required,
      Validators.pattern('[1-3]')
    ]),
    codigoDocente: new FormControl('', [
      Validators.required,
      Validators.pattern('[1-9]{8}')
    ]),
    codigoDelegado: new FormControl('', [
      Validators.required,
      Validators.pattern('[1-9]{8}')
    ]),
    nombreDelegado: new FormControl('', [
      Validators.required,
      Validators.pattern('[1-9]{8}')
    ]),
    telefonoDelegado: new FormControl('', [

    ]),
    direccionDelegado: new FormControl('', [

    ]),
    emailDelegado: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    codigoSubDelegado: new FormControl('', [
      Validators.required,
      Validators.pattern('[1-9]{8}')
    ]),
    nombreSubDelegado: new FormControl('', [
      Validators.required,
      Validators.pattern('[1-9]{8}')
    ]),
    telefonoSubDelegado: new FormControl('', [

    ]),
    direccionSubDelegado: new FormControl('', [

    ]),
    emailSubDelegado: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
   });
   this.source = new LocalDataSource(DELEGADOS);
  }


  onSubmit():void{

  }


  get codigoCurso() { return this.Formato2Form.get('codigoCurso');}
  get nombreCurso() { return this.Formato2Form.get('nombreCurso');}
  get nombreDocente() { return this.Formato2Form.get('nombreDocente');}
  get grupo() { return this.Formato2Form.get('grupo');}
  get codigoDocente() { return this.Formato2Form.get('codigoDocente');}
  get codigoDelegado() { return this.Formato2Form.get('codigoDelegado');}
  get nombreDelegado() { return this.Formato2Form.get('nombreDelegado');}
  get telefonoDelegado() { return this.Formato2Form.get('telefonoDelegado');}
  get direccionDelegado() { return this.Formato2Form.get('direccionDelegado');}
  get emailDelegado() { return this.Formato2Form.get('emailDelegado');}
  get codigoSubDelegado() { return this.Formato2Form.get('codigoDelegado');}
  get nombreSubDelegado() { return this.Formato2Form.get('nombreDelegado');}
  get telefonoSubDelegado() { return this.Formato2Form.get('telefonoDelegado');}
  get direccionSubDelegado() { return this.Formato2Form.get('direccionDelegado');}
  get emailSubDelegado() { return this.Formato2Form.get('emailDelegado');}

}
