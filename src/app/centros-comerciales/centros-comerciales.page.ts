import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ListacentroscomercialService } from './listacentroscomercial.service';

@Component({
  selector: 'app-centros-comerciales',
  templateUrl: './centros-comerciales.page.html',
  styleUrls: ['./centros-comerciales.page.scss'],
})
export class CentrosComercialesPage implements OnInit {

  aparece = false;

  listacent = [];

  constructor(private listacomerciales: ListacentroscomercialService, private router: Router) { }

  ngOnInit() {
    this.listacent = this.listacomerciales.obtenerlistacomer();
  }

  onDep() {


    this.router.navigate(['centros-comerciales/departamentos']);

  }

  onBuscarA(validar: boolean) {

    this.aparece = validar;

    console.log(this.aparece);

  }
}
