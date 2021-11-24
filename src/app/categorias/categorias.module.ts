import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCategoriasComponent } from './components/lista-categorias/lista-categorias.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ItemCategoriasComponent } from './components/item-categorias/item-categorias.component';



@NgModule({
  declarations: [
    ListaCategoriasComponent,
    ItemCategoriasComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class CategoriasModule { }
