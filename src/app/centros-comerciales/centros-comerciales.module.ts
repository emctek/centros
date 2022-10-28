import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentrosComercialesPageRoutingModule } from './centros-comerciales-routing.module';

import { CentrosComercialesPage } from './centros-comerciales.page';
import { DatosgComponent } from './datosg/datosg.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentrosComercialesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CentrosComercialesPage,DatosgComponent]
})
export class CentrosComercialesPageModule {}
