import { Component, OnInit } from '@angular/core';
import { ListaproductosService } from '../listaproductos.service';

@Component({
  selector: 'app-lineablanca',
  templateUrl: './lineablanca.component.html',
  styleUrls: ['./lineablanca.component.scss'],
})
export class LineablancaComponent implements OnInit {

  listalineablanca = [];


  constructor(private  listablanc: ListaproductosService) { }

  ngOnInit( ) {

   this.listalineablanca= this.listablanc.obtenerlistalineablan();
  }

}
