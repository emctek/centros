import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentrosComercialesPage } from './centros-comerciales.page';

const routes: Routes = [
  {
    path: '',
    component: CentrosComercialesPage
  },
  {
    path: 'departamentos',
    loadChildren: () => import('./departamentos/departamentos.module').then( m => m.DepartamentosPageModule)
  },  {
    path: 'opciones',
    loadChildren: () => import('./opciones/opciones.module').then( m => m.OpcionesPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentrosComercialesPageRoutingModule {}
