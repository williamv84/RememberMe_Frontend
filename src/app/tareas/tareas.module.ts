import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { TareasServiceService } from '../services/tareas-service.service';
import { ItemTareaComponent } from './components/item-tarea/item-tarea.component';




@NgModule({
  declarations: [
    ListaTareasComponent,
    ItemTareaComponent
    
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TareasServiceService
  ],
})
export class TareasModule { }
