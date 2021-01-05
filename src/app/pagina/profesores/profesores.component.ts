import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.scss']
})
export class ProfesoresComponent implements OnInit {
  ProfesorForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.ProfesorForm = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
      ]),
      usuario: new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  onSubmit():void{
    
  }

  get nombre() {return this.ProfesorForm.get('nombre');}v
  get usuario() {return this.ProfesorForm.get('usuario');}
  get password() {return this.ProfesorForm.get('password');}
}
