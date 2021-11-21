import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tarea } from '../../../models/tarea';


@Component({
  selector: 'app-tarea-detail',
  templateUrl: './tarea-detail.component.html',
  styleUrls: ['./tarea-detail.component.css']
})
export class TareaDetailComponent implements OnInit {

  datoTarea: Tarea = new Tarea();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.datoTarea = this.data.item;
  }

  prioridad(priorSel: number): void {
    this.datoTarea.prioridad = priorSel;
  }

}
