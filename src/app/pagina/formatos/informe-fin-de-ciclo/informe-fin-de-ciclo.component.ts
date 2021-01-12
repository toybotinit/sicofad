import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';
import { Formato5Service } from 'src/app/services/formato5.service';
import { Formato5 } from 'src/app/shared/Formato5';

@Component({
  selector: 'app-informe-fin-de-ciclo',
  templateUrl: './informe-fin-de-ciclo.component.html',
  styleUrls: ['./informe-fin-de-ciclo.component.scss']
})
export class InformeFinDeCicloComponent implements OnInit {

  Formato5Form: FormGroup;
  fechaActual: number = Date.now();
  formato5: Formato5[];
  formato5table = new Array();
  source: LocalDataSource;
  nuevoFormato: boolean;
  today: number = Date.now();
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
      curso: {
        title: 'Curso',
        type: 'string',
        editable: false,
        addable: false,
      },
      grupo: {
        title: 'Grupo',
        type: 'string',
        editable: false,
        addable: false,
      },
      tipo: {
        title: 'Tipo',
        type: 'string',
        editable: false,
        addable: false,
      },
      docente: {
        title: 'Docente',
        type: 'number',
        editable: false,
        addable: false,
      },
      fecha: {
        title: 'Fecha',
        type: 'string',
        editable: false,
        addable: false,
      },
    },

    noDataMessage: 'No se encontraron datos',
  };
  constructor(private formato5Service: Formato5Service) { }
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
        Validators.pattern('[1-9]{7}|^9[1-9]{8}'),
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
      notaAlta: new FormControl('', [
        Validators.required,
        Validators.max(20),
        Validators.min(0),
      ]),
      notaBaja: new FormControl('', [
        Validators.required,
        Validators.max(20),
        Validators.min(0),
      ]),
      notaPromedio: new FormControl('',[
        Validators.required,
        Validators.max(20),
        Validators.min(0),
      ]),
      nivel: new FormControl('',[Validators.required,]),
      asistencia: new FormControl('', [Validators.required]),
      silabo: new FormControl(),
      aulaVirtual: new FormControl(),
      administrativas: new FormControl(),
      silaboCompetencias: new FormControl(),
      mejoraContinua: new FormControl(),
      investigacionFormativa: new FormControl(),
      actualizacionDocente: new FormControl(),
      comentariosYrecomendaciones: new FormControl(),
     });

     var formato;
     var tipo="";
    this.formato5Service.getFormato5s()
      .subscribe((formatos5) => {
        this.formato5 = formatos5;
        console.log(formatos5)
        console.log(this.formato5)
        this.formato5.forEach((format5) => {
          if(format5.tipo.teoria){
            tipo += "teoria";
            if(format5.tipo.practica){
              tipo += ", practica";
              if(format5.tipo.laboratorio)
                tipo += ", laboratorio";
            }
            else{
              if(format5.tipo.laboratorio)
                tipo += ", laboratorio";
            }
          }
          else {
            if(format5.tipo.practica){
              tipo += "practica";
              if(format5.tipo.laboratorio)
                tipo += ", laboratorio";
            }
            else{
              if(format5.tipo.laboratorio)
                tipo += "laboratorio";
            }
          }
          console.log(tipo);
          formato = new Object({
            "codigo": format5.cod_curso,
            "curso": format5.nom_curso,
            "grupo": format5.num_grupo,
            "tipo": tipo,
            "docente": format5.nom_docente,
            "fecha": format5.fecha,
          });
          this.formato5table.push(formato);
          tipo = "";
        });
        this.source = new LocalDataSource(this.formato5table);
      });
  }

  onSubmit():void{

    this.Formato5Form.get('tipo').value;
    var tipo = {
      "teoria": this.Formato5Form.get('tipo').value[0] == "Teoria" ? true: false,
      "practica" :  this.Formato5Form.get('tipo').value[1]== "Practica" ? true: false,
      "laboratorio" :  this.Formato5Form.get('tipo').value[2]== "Laboratorio" ? true: false,
    }
    var formato:Formato5 ={
      "cod_curso": this.Formato5Form.get('codigoCurso').value,
      "nom_curso": this.Formato5Form.get('nombreCurso').value,
      "num_grupo": this.Formato5Form.get('grupo').value,
      "tipo": tipo,
      "nom_docente": this.Formato5Form.get('nombreDocente').value,
      "email_docente": this.Formato5Form.get('emailDocente').value,
      "num_docente": this.Formato5Form.get('numeroDocente').value,
      "del_curso": {
        "porcentaje_silabo": this.Formato5Form.get('porcentajeSilabo').value,
        "practicas": this.Formato5Form.get('practicas').value,
        "experiencias_laboratorio": this.Formato5Form.get('experienciasLaboratorio').value,
        "proyectos_investigacion": this.Formato5Form.get('proyectosInvestigacion').value,
        "matriculados": this.Formato5Form.get('matriculados').value,
        "aprobados": this.Formato5Form.get('aprobados').value,
        "desaprobados": this.Formato5Form.get('desaprobados').value, 
        "ausentes": this.Formato5Form.get('ausentes').value,
        "nota_alta": this.Formato5Form.get('notaAlta').value,
        "nota_baja": this.Formato5Form.get('notaBaja').value,
        "nota_promedio": this.Formato5Form.get('notaPromedio').value,
      },
      "observaciones": {
        "nivel": this.Formato5Form.get('nivel').value,
        "asistencia": this.Formato5Form.get('asistencia').value,
        "silabo": this.Formato5Form.get('silabo').value,
        "aula_virtual": this.Formato5Form.get('aulaVirtual').value,
        "administrativas": this.Formato5Form.get('administrativas').value,
        "silabo_competencias": this.Formato5Form.get('silaboCompetencias').value,
        "mejora_continua": this.Formato5Form.get('mejoraContinua').value,
        "investigacion_formativa": this.Formato5Form.get('investigacionFormativa').value,
        "actualizacion_docente": this.Formato5Form.get('actualizacionDocente').value,
        "comentarios_recomendaciones": this.Formato5Form.get('comentariosYrecomendaciones').value,

      },
      "fecha": this.fechaActual.toString(),
    };
    var tip= "";
    this.formato5Service.create(formato).subscribe(
      (formato5) => {
        if(formato5.tipo.teoria){
          tip += "teoria";
          if(formato5.tipo.practica){
            tip += ", practica";
            if(formato5.tipo.laboratorio)
              tip += ", laboratorio";
          }
          else{
            if(formato5.tipo.laboratorio)
              tip += ", laboratorio";
          }
        }
        else {
          if(formato5.tipo.practica ){
            tip += "practica";
            if(formato5.tipo.laboratorio)
              tip += ", laboratorio";
          }
          else{
            if(formato5.tipo.laboratorio)
              tip += "laboratorio";
          }
        }
        console.log(formato)
        var formato = new Object({
          "codigo": formato.cod_curso,
          "curso": formato.nom_curso,
          "grupo": formato.num_grupo,
          "tipo": tip,
          "docente": formato.nom_docente,
          "fecha": formato.fecha,
        });
        this.formato5table.push(formato);
        this.source.add(formato);
        this.nuevoFormato=true;
      }); 
  }

  changeTab():void {
    var formato;
    var tipo = "";
    var formato5t = new Array();
    this.formato5Service.getFormato5s().subscribe(
      (formatos) => {
         formatos.forEach((format5) => {
          if(format5.tipo.teoria){
            tipo += "teoria";
            if(format5.tipo.practica){
              tipo += ", practica";
              if(format5.tipo.laboratorio)
                tipo += ", laboratorio";
            }
            else{
              if(format5.tipo.laboratorio)
                tipo += ", laboratorio";
            }
          }
          else {
            if(format5.tipo.practica){
              tipo += "practica";
              if(format5.tipo.laboratorio)
                tipo += ", laboratorio";
            }
            else{
              if(format5.tipo.laboratorio)
                tipo += "laboratorio";
            }
          }
          formato = new Object({
            "codigo": format5.cod_curso,
            "curso": format5.nom_curso,
            "grupo": format5.num_grupo,
            "tipo": tipo,
            "docente": format5.nom_docente,
            "fecha": format5.fecha,
          });
          formato5t.push(formato);
          console.log(tipo)
          tipo = "";
          console.log(tipo)
        });
        this.source.load(formato5t);
      });
      this.nuevoFormato = false;
  }

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
  get asistencia() { return this.Formato5Form.get('asistencia');}
  get nivel() { return this.Formato5Form.get('nivel');}
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
  this.notaPromedio.setValue((this.notaAlta.value + this.notaBaja.value)/2);
  return (this.notaAlta.value + this.notaBaja.value)/2
}

}
