import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { TareasServiceService } from 'src/app/services/tareas-service.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  listaTareas: Tarea[] = [];

  constructor(private tareaService: TareasServiceService) { }

  ngOnInit(): void {
    this.tareaService.getTareas().subscribe(tareas => {
      this.listaTareas = tareas;
      const lista = JSON.stringify(tareas);
      console.log(lista);

    });

  }

}
