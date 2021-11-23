import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tarea } from '../../../models/tarea';
import { DateAdapter } from '@angular/material/core';
import { TareasServiceService } from 'src/app/services/tareas-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tarea-detail',
  templateUrl: './tarea-detail.component.html',
  styleUrls: ['./tarea-detail.component.css']
})
export class TareaDetailComponent implements OnInit {



  datoTarea: Tarea = new Tarea();
  color1: string = "";
  color2: string = "";
  color3: string = "";

  bgcolor1: string = "";
  bgcolor2: string = "";
  bgcolor3: string = "";
  bgcolor4: string = "";
  bgcolor5: string = "";

  fechaLimiteDetalle: string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dateAdapter: DateAdapter<Date>, private tareaService: TareasServiceService,
    private router: Router) {
    this.dateAdapter.setLocale('es-CO'); //dd/MM/yyyy
  }

  ngOnInit(): void {
    this.datoTarea = this.data.item;
    this.cambiaEstado(this.datoTarea.estado);
    this.prioridad(this.datoTarea.prioridad);
    this.fechaLimiteDetalle = this.datoTarea.fechalimite;


  }

  prioridad(priorSel: number): void {
    this.datoTarea.prioridad = priorSel;
    this.bgInitWhite();
    switch (priorSel) {
      case 1:
        this.bgcolor1 = "bg-warning";
        break;
      case 2:
        this.bgcolor2 = "bg-warning";
        break;
      case 3:
        this.bgcolor3 = "bg-warning";
        break;
      case 4:
        this.bgcolor4 = "bg-dark";
        break;
      case 5:
        this.bgcolor5 = "bg-primary";
        break;
    }
    // console.log(this.datoTarea.fechalimite);

  }

  bgInitWhite() {
    this.bgcolor1 = "bg-white";
    this.bgcolor2 = "bg-white";
    this.bgcolor3 = "bg-white";
    this.bgcolor4 = "bg-white";
    this.bgcolor5 = "bg-white";
  }

  cambiaEstado(estado: number) {
    switch (estado) {

      case 1:
        this.color1 = "bg-danger";
        this.color2 = "bg-white";
        this.color3 = "bg-white";
        this.datoTarea.estado = 1
        break;
      case 2:
        this.color1 = "bg-danger";
        this.color2 = "bg-secondary";
        this.color3 = "bg-white";
        this.datoTarea.estado = 2
        break;
      case 3:
        this.color1 = "bg-danger";
        this.color2 = "bg-secondary";
        this.color3 = "bg-warning";
        this.datoTarea.estado = 3
        break;
    }
  }

  aceptar(): void {
    this.datoTarea.fechalimite = this.fechaLimiteDetalle;
    this.tareaService.updateTarea(this.datoTarea.id, this.datoTarea).subscribe(tareas => {

      const lista = JSON.stringify(tareas);
      // console.log(lista);

      this.navigate("/");

    });
  }


  navigate(ruta: string) {
    // console.log(serie);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([ruta]);
  }

}
