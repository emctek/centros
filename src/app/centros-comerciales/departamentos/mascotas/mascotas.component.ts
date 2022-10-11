import { Component, OnInit } from '@angular/core';
import { ListaproductosService } from '../listaproductos.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.scss'],
})
export class MascotasComponent implements OnInit {

  listamascotas= [];


  constructor(private  listamas: ListaproductosService) { }

  ngOnInit( ) {

   this.listamascotas= this.listamas.obtenerlistamas();
  }
}
