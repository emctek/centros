import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class ListacentroscomercialService {


  listacomerciales = [

    {
      id: '1',
      nombre: 'Soriana',
      imagen: 'assets/centroscomerciales/soriana.png'

    },
    {
      id: '2',
      nombre: 'Bodega Aurrera',
      imagen: 'assets/centroscomerciales/bodegaaurrera.png'

    },
    {
      id: '3',
      nombre: 'Chedraui',
      imagen: 'assets/centroscomerciales/chedraui.jpg'

    }
    ,
    {
      id: '4',
      nombre: 'Walmart',
      imagen: 'assets/centroscomerciales/walmart.png'

    }
    ,
    {
      id: '5',
      nombre: 'Comercial Mexicana',
      imagen: 'assets/centroscomerciales/comercialmexicana.png'

    }

  ];
  constructor() { }

  obtenerlistacomer() {

    return this.listacomerciales;

  }
}
