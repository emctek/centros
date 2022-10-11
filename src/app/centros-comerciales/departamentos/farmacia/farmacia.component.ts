import { Component, OnInit } from '@angular/core';
import { ListaproductosService } from '../listaproductos.service';

@Component({
  selector: 'app-farmacia',
  templateUrl: './farmacia.component.html',
  styleUrls: ['./farmacia.component.scss'],
})
export class FarmaciaComponent implements OnInit {

  listafarmacia = [];


  constructor(private  listafar: ListaproductosService) { }

  ngOnInit( ) {

   this.listafarmacia= this.listafar.obtenerlistafarm();
  }

}
