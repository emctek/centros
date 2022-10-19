import { Component, OnInit } from '@angular/core';


import { ListaproductosService } from '../listaproductos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {

  listasproductos = [];


  constructor(private  lista: ListaproductosService, private ruta: Router) { }

  ngOnInit( ) {

   this.listasproductos= this.lista.obtenerlistavinolicor();
   console.log(this.listasproductos);
  }

  cargad(id: any){
this.ruta.navigate(['centros-comerciales/departamentos/productos/', id]);


  }

}
