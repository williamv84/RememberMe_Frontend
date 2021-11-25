import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { TareasServiceService } from 'src/app/services/tareas-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { duration } from 'moment';
import { BitacoraService } from 'src/app/services/bitacora.service';
import { Bitacora } from '../../../models/bitacora';



@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  listaTareas: Tarea[] = [];
  tituloNuevaTarea: string = "";
  selected = 'none';

  constructor(private tareaService: TareasServiceService, private _snackBar: MatSnackBar, private bitacoraService: BitacoraService) { }

  ngOnInit(): void {
    this.traerTareas();


  }

  traerTareas() {
    this.tareaService.getTareas().subscribe(tareas => {
      this.listaTareas = tareas;
      const lista = JSON.stringify(tareas);
      // console.log(lista);

    });

  }
  tareaRapida() {
    // console.log(this.tituloNuevaTarea);
    let nuevaTarea = new Tarea();
    nuevaTarea.titulo = this.tituloNuevaTarea;
    nuevaTarea.descripcion = "";
    nuevaTarea.id_usuario = 1;
    this.tareaService.createTarea(nuevaTarea).subscribe(tareas => {

      const lista = JSON.stringify(tareas);
      // console.log(tareas.body.tarea);
      this.tituloNuevaTarea = "";
      // this.traerTareas();
      let tareaJustCreated = new Tarea();
      tareaJustCreated = tareas.body.tarea;
      this.listaTareas.push(tareaJustCreated);

      this._snackBar.open("Tarea Creada", 'Dismiss', { duration: 2000, verticalPosition: 'bottom', panelClass: ['red-snackbar'] });

      this.crearRegistroBitacora(tareaJustCreated);

    });

  }

  crearRegistroBitacora(tareaCreada: Tarea): void {
    let bitacoraNew = new Bitacora();
    bitacoraNew.descripcion = "Tarea Creada";
    bitacoraNew.id_tareas = tareaCreada.id;
    bitacoraNew.id_usuario = 1;

    this.bitacoraService.createBitacora(bitacoraNew).subscribe(bitacora => {

      const lista = JSON.stringify(bitacora);
      console.log(lista);
      let bicacoraJustCreated = new Bitacora();
      bicacoraJustCreated = bitacora.body.tarea;
      console.log(bicacoraJustCreated)
    });
  }

}
