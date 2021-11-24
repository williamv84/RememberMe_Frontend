import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaBitacoraComponent } from './bitacora/components/lista-bitacora/lista-bitacora.component';
import { ListaTablerosComponent } from './tableros/components/lista-tableros/lista-tableros.component';
import { ListaTareasComponent } from './tareas/components/lista-tareas/lista-tareas.component';

const routes: Routes = [{
  path: '',
  component: ListaTareasComponent

},
{
  path: 'tableros',
  component: ListaTablerosComponent

},
{
  path: 'bitacora',
  component: ListaBitacoraComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
