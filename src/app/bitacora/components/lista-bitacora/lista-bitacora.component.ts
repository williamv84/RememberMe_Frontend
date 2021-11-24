import { Component, OnInit } from '@angular/core';
import { BitacoraService } from 'src/app/services/bitacora.service';
import { Bitacora } from '../../../models/bitacora';


@Component({
  selector: 'app-lista-bitacora',
  templateUrl: './lista-bitacora.component.html',
  styleUrls: ['./lista-bitacora.component.css']
})
export class ListaBitacoraComponent implements OnInit {
  listaBitacora: Bitacora[] = [];

  dataSource: any;

  displayedColumns: string[] = ['id', 'descripcion', 'id_treas', 'id_usuario', 'create_at'];
  constructor(private bitacoraService: BitacoraService) { }

  ngOnInit(): void {

    this.traerBitacora(1);
    //Reemplazar por id del usuario
  }

  traerBitacora(id_usuario: number): void {

    this.bitacoraService.getBitacora(id_usuario).subscribe(bitacoras => {
      this.listaBitacora = bitacoras;
      const lista = JSON.stringify(bitacoras);
      console.log(lista);
      this.dataSource = this.listaBitacora;
    });
  }

}
