import { Component, OnInit } from '@angular/core';
import { ListaproductosService } from '../listaproductos.service';

@Component({
  selector: 'app-vinosylicores',
  templateUrl: './vinosylicores.component.html',
  styleUrls: ['./vinosylicores.component.scss'],
})
export class VinosylicoresComponent implements OnInit {

  listavinosylicores = [];


  constructor(private  listavinlic: ListaproductosService) { }

  ngOnInit( ) {

   this.listavinosylicores= this.listavinlic.obtenerlistavinolicor();
  }

}
