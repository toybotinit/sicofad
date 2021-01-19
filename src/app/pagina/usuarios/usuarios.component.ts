import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';
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
  destroyByClick = true;
  duration = 2500;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'success';

  title = 'guardado';
  content = `Se ha guardado con éxito`;
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

  constructor(private usuarioService: UsuarioService, private toastrService: NbToastrService) { }

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
  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `. ${title}` : '';
  
    this.toastrService.show(
      body,
      `usuario ${titleContent}`,
      config);
  }
  onSubmit():void{
    var user = {
      "user": this.UsuarioForm.get('usuario').value,
      "pass": this.UsuarioForm.get('password').value,
      "rol": this.UsuarioForm.get('rol').value,
    }
    this.usuarioService.create(user).subscribe(
      (usuario) =>  {this.source.add(usuario); this.usuarios.push(usuario)});
    this.showToast(this.status, this.title, this.content); 
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
