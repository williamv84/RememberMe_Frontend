import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Tarea } from '../../../models/tarea';
import { MatDialog } from '@angular/material/dialog';
import { TareaDetailComponent } from '../tarea-detail/tarea-detail.component';
import { DateAdapter } from '@angular/material/core';



@Component({
  selector: 'app-item-tarea',
  templateUrl: './item-tarea.component.html',
  styleUrls: ['./item-tarea.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ItemTareaComponent implements OnInit {
  @Input() item: Tarea = new Tarea();

  color1: string = "";
  color2: string = "";
  color3: string = "";
  iconoPrioridad: string = "";


  constructor(public dialog: MatDialog, private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('es-CO'); //dd/MM/yyyy
  }

  ngOnInit(): void {

    switch (this.item.prioridad) {

      case 2:
        this.iconoPrioridad = "./assets/img/" + "cdos.png";
        break;
      case 3:
        this.iconoPrioridad = "./assets/img/" + "ctres.png";
        break;
      case 4:
        this.iconoPrioridad = "./assets/img/" + "ccuatro.png";
        break;
      case 5:
        this.iconoPrioridad = "./assets/img/" + "ccinco.png";
        break;

      default:
        this.iconoPrioridad = "./assets/img/" + "cuno.png";
        break;
    }

    this.cambiaEstado(this.item.estado);



  }

  openDialog(item: Tarea): void {
    // console.log(item)

    let dialogRef = this.dialog.open(TareaDetailComponent, { data: { item: item } })
  }

  cambiaEstado(estado: number) {
    switch (estado) {

      case 1:
        this.color1 = "bg-danger";
        this.color2 = "bg-white";
        this.color3 = "bg-white";
        break;
      case 2:
        this.color1 = "bg-danger";
        this.color2 = "bg-secondary";
        this.color3 = "bg-white";
        break;
      case 3:
        this.color1 = "bg-danger";
        this.color2 = "bg-secondary";
        this.color3 = "bg-warning";
        break;
    }
  }

}
