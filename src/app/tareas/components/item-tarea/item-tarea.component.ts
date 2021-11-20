import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../../../models/tarea';


@Component({
  selector: 'app-item-tarea',
  templateUrl: './item-tarea.component.html',
  styleUrls: ['./item-tarea.component.css']
})
export class ItemTareaComponent implements OnInit {
@Input() item:Tarea=new Tarea();
  constructor() { }

  ngOnInit(): void {
  }

}
