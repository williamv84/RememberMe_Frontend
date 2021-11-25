import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { TareasServiceService } from './services/tareas-service.service';
import { BitacoraService } from './services/bitacora.service';
import { UsuariosService } from './services/usuarios.service';

import { TareasModule } from './tareas/tareas.module';
import { BitacoraModule } from './bitacora/bitacora.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CategoriasModule } from './categorias/categorias.module';
import { UsuariosModule } from './usuarios/usuarios.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import 'hammerjs';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginModule } from './auth/login/login.module';
import { AboutComponent } from './components/about/about.component';
import { ConfirmationDialogComponent } from './categorias/components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    TareasModule,
    BitacoraModule,
    UsuariosModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    CategoriasModule,
    LoginModule
  ],
  providers: [
    TareasServiceService,
    BitacoraService,
    UsuariosService
  ],
  entryComponents: [ConfirmationDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
