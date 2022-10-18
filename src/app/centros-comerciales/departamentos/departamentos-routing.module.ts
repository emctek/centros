import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartamentosPage } from './departamentos.page';
import { ElectronicaComponent } from './electronica/electronica.component';
import { FarmaciaComponent } from './farmacia/farmacia.component';
import { LineablancaComponent } from './lineablanca/lineablanca.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { VinosylicoresComponent } from './vinosylicores/vinosylicores.component';
import { ProductosComponent } from './productos/productos.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [
  {
    path: '',
    component: DepartamentosPage
  }
  ,
  {
    path: 'electronicap',
    component: ElectronicaComponent
  }
  ,
  {
    path: 'farmaciap',
    component: FarmaciaComponent
  }  ,
  {
    path: 'lineablancap',
    component: LineablancaComponent
  }  ,
  {
    path: 'mascotasp',
    component: MascotasComponent
  }  ,
  {
    path: 'vinosylicoresp',
    component: VinosylicoresComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'productos/:id',
    component: DetallesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartamentosPageRoutingModule {}
