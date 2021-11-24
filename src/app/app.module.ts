import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TareasServiceService } from './services/tareas-service.service';
import { HttpClientModule } from '@angular/common/http';
import { TareasModule } from './tareas/tareas.module';
import { BitacoraModule } from './bitacora/bitacora.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FormsModule } from "@angular/forms";
import 'hammerjs';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BitacoraService } from './services/bitacora.service';
import { CategoriasModule } from './categorias/categorias.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    TareasModule,
    BitacoraModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    CategoriasModule
  ],
  providers: [
    TareasServiceService,
    BitacoraService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
