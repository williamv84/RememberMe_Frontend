import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Tarea } from '../../../models/tarea';
import { MatDialog } from '@angular/material/dialog';
import { TareaDetailComponent } from '../tarea-detail/tarea-detail.component';



@Component({
  selector: 'app-item-tarea',
  templateUrl: './item-tarea.component.html',
  styleUrls: ['./item-tarea.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ItemTareaComponent implements OnInit {
  @Input() item: Tarea = new Tarea();


  iconoPrioridad: string = "";


  constructor(public dialog: MatDialog) { }

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



  }

  openDialog(item: Tarea): void {
    // console.log(item)

    let dialogRef = this.dialog.open(TareaDetailComponent, { data: { item: item } })
  }

}
