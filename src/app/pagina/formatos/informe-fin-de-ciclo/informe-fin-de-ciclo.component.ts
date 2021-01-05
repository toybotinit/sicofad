import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-informe-fin-de-ciclo',
  templateUrl: './informe-fin-de-ciclo.component.html',
  styleUrls: ['./informe-fin-de-ciclo.component.scss']
})
export class InformeFinDeCicloComponent implements OnInit {

  Formato5Form: FormGroup;
  fechaActual: number = Date.now();
  constructor() { }
  ngOnInit(): void {
    this.Formato5Form = new FormGroup({
      codigoCurso: new FormControl('', [
        Validators.required,
        Validators.pattern('[1-9]{7}')
      ]),
      nombreCurso: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      grupo: new FormControl('', [
        Validators.required,
        Validators.pattern('[1-3]')
      ]),
      tipo: new FormControl('', [
        Validators.required,
      ]),
      nombreDocente: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      emailDocente: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      numeroDocente: new FormControl([
        Validators.pattern('[1-9]{7} || 9[1-9]{8}'),
      ]),
      porcentajeSilabo: new FormControl(' ', [
        Validators.required,
        Validators.pattern('^[1-9][0-9]?$|^100$'),
      ]),
      practicas: new FormControl(' ', [
        Validators.required,
        Validators.pattern('^[0-4]'),
      ]),
      experienciasLaboratorio: new FormControl(' ', [
        Validators.required,
        Validators.pattern('^[0-4]'),
      ]),
      proyectosInvestigacion: new FormControl(' ', [
        Validators.required,
        Validators.pattern('^[0-2]'),
      ]),
      matriculados: new FormControl(' ', [
        Validators.required,
        Validators.pattern('^[1-9][0-9]$|^100$'),
      ]),
      aprobados: new FormControl(' ', [
        Validators.required,
        Validators.pattern('^[1-9][0-9]$|^100$'),
      ]),
      desaprobados: new FormControl(' ', [
        Validators.required,
        Validators.pattern('^[1-9]'),
      ]),
      ausentes: new FormControl(' ', [
        Validators.required,
      ]),
      notaAlta: new FormControl( [
        Validators.required,
        Validators.max(20),
        Validators.min(0),
      ]),
      notaBaja: new FormControl( [
        Validators.required,
        Validators.max(20),
        Validators.min(0),
      ]),
      notaPromedio: new FormControl([
        Validators.required,
        Validators.max(20),
        Validators.min(0),
      ]),
      nivel: new FormControl(),
      asistencia: new FormControl(),
      silabo: new FormControl(),
      aulaVirtual: new FormControl(),
      administrativas: new FormControl(),
      silaboCompetencias: new FormControl(),
      mejoraContinua: new FormControl(),
      investigacionFormativa: new FormControl(),
      actualizacionDocente: new FormControl(),
      comentariosYrecomendaciones: new FormControl(),
     });
  }

  onSubmit():void{
    
  }
  options = [
    { value: 'Básico', label: 'Básico' },
    { value: 'Medio', label: 'Intermedio'},
    { value: 'Alto', label: 'Alto' },
    { value: 'Avanzado', label: 'Avanzado'},
  ];

  get codigoCurso() { return this.Formato5Form.get('codigoCurso');}
  get nombreCurso() { return this.Formato5Form.get('nombreCurso');}
  get grupo() { return this.Formato5Form.get('grupo');}
  get tipo() { return this.Formato5Form.get('tipo');}
  get nombreDocente() { return this.Formato5Form.get('nombreDocente');}
  get emailDocente() { return this.Formato5Form.get('emailDocente');}
  get numeroDocente() { return this.Formato5Form.get('numeroDocente');}
  get porcentajeSilabo() { return this.Formato5Form.get('porcentajeSilabo');}
  get practicas() { return this.Formato5Form.get('practicas');}
  get experienciasLaboratorio() { return this.Formato5Form.get('experienciasLaboratorio');}
  get proyectosInvestigacion() { return this.Formato5Form.get('proyectosInvestigacion');}
  get matriculados() { return this.Formato5Form.get('matriculados');}
  get aprobados() { return this.Formato5Form.get('aprobados');}
  get desaprobados() { return this.Formato5Form.get('desaprobados');}
  get ausentes() { return this.Formato5Form.get('ausentes');}
  get notaAlta() { return this.Formato5Form.get('notaAlta');}
  get notaBaja() { return this.Formato5Form.get('notaBaja');}
  get notaPromedio() { return this.Formato5Form.get('notaPromedio');}
  get status() {
    if (this.porcentajeSilabo.value <= 25 && this.porcentajeSilabo.value >= 1) {
      return 'danger';
    } else if (this.porcentajeSilabo.value <= 50) {
      return 'warning';
    } else if (this.porcentajeSilabo.value <= 85) {
      return 'info';
    } else if (this.porcentajeSilabo.value <= 100) {
      return 'success';
    } else {
      return 'basic';
    }
  }
get promedio(){
  return (this.notaAlta.value + this.notaBaja.value)/2
}

}
