import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RegistroUsuariosComponent } from './components/registro-usuarios/registro-usuarios.component';
import { LoginUsuariosComponent } from './components/login-usuarios/login-usuarios.component';




@NgModule({
  declarations: [
    RegistroUsuariosComponent,
    LoginUsuariosComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class UsuariosModule { }
