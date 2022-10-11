import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentrosComercialesPageRoutingModule } from './centros-comerciales-routing.module';

import { CentrosComercialesPage } from './centros-comerciales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentrosComercialesPageRoutingModule
  ],
  declarations: [CentrosComercialesPage]
})
export class CentrosComercialesPageModule {}
