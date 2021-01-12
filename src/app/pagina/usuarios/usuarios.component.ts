import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/shared/Usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  source: LocalDataSource;
  UsuarioForm: FormGroup;
  usuarios: Usuario[];
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    hideSubHeader: false,
    columns: {
      user: {
        title: 'Usuario',
        type: 'string',
        editable: false,
        addable: false,
      },
      pass: {
        title: 'Contraseña',
        type: 'string',
        editable: false,
        addable: false,
      },
      rol: {
        title: 'Rol',
        type: 'string',
        editable: false,
        addable: false,
      },
    },

    noDataMessage: 'No se encontraron datos',
  };

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.UsuarioForm = new FormGroup({
      usuario: new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
      rol: new FormControl('', [
        Validators.required,
      ]),
    });

    this.usuarioService.getUsuarios()
      .subscribe((usuarios) => {
        this.usuarios = usuarios;
        console.log(this.usuarios)
        this.source = new LocalDataSource(this.usuarios);
      });
    
  }

  onSubmit():void{
    var user = {
      "user": this.UsuarioForm.get('usuario').value,
      "pass": this.UsuarioForm.get('password').value,
      "rol": this.UsuarioForm.get('rol').value,
    }
    this.usuarioService.create(user).subscribe(
      (usuario) =>  {this.source.add(usuario); this.usuarios.push(usuario)});
      
  }
  changeTab():void {
    this.usuarioService.getUsuarios()
      .subscribe((usuarios) => {
        this.usuarios = usuarios;
        this.source.load(this.usuarios);
      });
  }

  get usuario() {return this.UsuarioForm.get('usuario');}
  get password() {return this.UsuarioForm.get('password');}
  get rol() {return this.UsuarioForm.get('rol');}
}
