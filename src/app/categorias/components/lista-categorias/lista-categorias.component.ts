import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../models/categoria';
import { duration } from 'moment';
import { CategoriasServiceService } from 'src/app/services/categorias-service.service';


@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent implements OnInit {
  listaCategorias: Categoria[] = [];
  displayedColumns: string[] = ['id', 'descripcion'];
  dataSource: any;


  constructor(private categoriaService: CategoriasServiceService) { }

  ngOnInit(): void {
    this.traerCategorias(1);
  }

  traerCategorias(id_usuario: number) {
    this.categoriaService.getCategorias(id_usuario).subscribe(categorias => {
      this.listaCategorias = categorias;
      const lista = JSON.stringify(categorias);
      console.log(lista);
      this.dataSource = this.listaCategorias;
    });
  }
}

