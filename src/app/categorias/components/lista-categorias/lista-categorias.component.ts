import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../models/categoria';
import { duration } from 'moment';
import { CategoriasServiceService } from 'src/app/services/categorias-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent implements OnInit {
  listaCategorias: Categoria[] = [];
  displayedColumns: string[] = ['id', 'descripcion'];
  dataSource: any;
  nombreCategoria: string = "";
  

  constructor(private categoriaService: CategoriasServiceService, private router: Router, private _snackBar: MatSnackBar

    ) { }

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

  nuevaCategoria() {
    // console.log(this.nuevacategoria);
    let newCategoria = new Categoria();
    newCategoria.descripcion = this.nombreCategoria;
    newCategoria.id_usuario = 1;
    this.categoriaService.createCategoria(newCategoria).subscribe(categorias => {

      const lista = JSON.stringify(categorias);
      // console.log(tareas.body.categoria);
      this.nombreCategoria = "";
      // this.traerTareas();
     /* let categoriaJustCreated = new Categoria();
     categoriaJustCreated.descripcion = categorias.body.descripcion;
     categoriaJustCreated.id_usuario = categorias.body.id_usuario;
     this.listaCategorias.push(categoriaJustCreated);
     this.dataSource = this.listaCategorias; */
      this._snackBar.open("Categoria Creada", 'Dismiss', { duration: 2000, verticalPosition: 'bottom', panelClass: ['red-snackbar'] });
      //this.navigate("categorias");
      this.traerCategorias(1);

    });

}
navigate(ruta: string) {
  // console.log(serie);
  this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  this.router.onSameUrlNavigation = 'reload';
  this.router.navigate([ruta]);
}

}
