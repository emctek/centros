import { Component, OnInit } from '@angular/core';
import { ListaproductosService } from '../listaproductos.service';
import { IonicModule } from '@ionic/angular';
import { IniciounicocComponent } from '../../../../../../kurumi/src/app/componentes/iniciounicoc/iniciounicoc.component';


@Component({
  selector: 'app-electronica',
  templateUrl: './electronica.component.html',
  styleUrls: ['./electronica.component.scss']
})
export class ElectronicaComponent implements OnInit {

  listaelectronica = [];


  constructor(private  listaelec: ListaproductosService) { }

  ngOnInit( ) {

   this.listaelectronica= this.listaelec.obtenerlistaelec();
  }


}
