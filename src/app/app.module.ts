import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TareasServiceService } from './services/tareas-service.service';
import { HttpClientModule } from '@angular/common/http';
import { TareasModule } from './tareas/tareas.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from "@angular/forms";
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TareasModule,
    AngularMaterialModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    TareasServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
