import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaproductosService } from '../listaproductos.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {
  idr: any;
  lproductoid = {};

  constructor(private rutaactual: ActivatedRoute, private listaproducto: ListaproductosService) { }

  ngOnInit() {
    console.log(' este es id: ', this.rutaactual.snapshot.paramMap.get('id'));

    this.idr = this.rutaactual.snapshot.paramMap.get('id');

    this.lproductoid = this.listaproducto.obtenerlistavinolicorid((this.idr - 1));

    console.log(this.lproductoid);

  }

}
