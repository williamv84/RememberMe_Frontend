import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TareasServiceService } from './services/tareas-service.service';
import { HttpClientModule } from '@angular/common/http';
import { TareasModule } from './tareas/tareas.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TareasModule

  ],
  providers: [
    TareasServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
