import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepartamentosPageRoutingModule } from './departamentos-routing.module';

import { DepartamentosPage } from './departamentos.page';
import { ElectronicaComponent } from './electronica/electronica.component';
import { FarmaciaComponent } from './farmacia/farmacia.component';
import { LineablancaComponent } from './lineablanca/lineablanca.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { VinosylicoresComponent } from './vinosylicores/vinosylicores.component';
import { ProductosComponent } from './productos/productos.component';
import { DetallesComponent } from './detalles/detalles.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepartamentosPageRoutingModule
  ],
  // eslint-disable-next-line max-len
  declarations: [DepartamentosPage,ElectronicaComponent,FarmaciaComponent,LineablancaComponent,MascotasComponent,VinosylicoresComponent,ProductosComponent,DetallesComponent]
})
export class DepartamentosPageModule {}
