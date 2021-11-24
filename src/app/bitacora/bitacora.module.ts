import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ListaBitacoraComponent } from './components/lista-bitacora/lista-bitacora.component';
import { BitacoraService } from '../services/bitacora.service';
import { ItemBitacoraComponent } from './components/item-bitacora/item-bitacora.component';


@NgModule({
  declarations: [
    ListaBitacoraComponent,
    ItemBitacoraComponent,

  ],
  imports: [
    CommonModule,
    AngularMaterialModule,

  ],
  providers: [
    BitacoraService,
  ]
})
export class BitacoraModule { }
