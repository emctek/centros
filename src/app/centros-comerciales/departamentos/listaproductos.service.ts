import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaproductosService {


  listaelectronica = [
    {
      id: 1,
      producto: 'Television Samsug',
      precio: '4670$',
      descripcion: 'producto del departamento electronica',
      imagen: 'assets/electronica/tvsamsug.jpg'
    },
    {
      id: 2,
      nombre: 'DVD Sony',
      precio: '2230$',
      descripcion: 'producto del departamento electronica',
      imagen: 'assets/electronica/dvdsony.jpg'
    },
    {
      id: 3,
      nombre: 'Estereo LG',
      precio: '6120$',
      descripcion: 'producto del departamento electronica',
      imagen: 'assets/electronica/estereolg.jpg'
    },
    {
      id: 4,
      nombre: 'Teatro en casa BOSE',
      precio: '7100$',
      descripcion: 'producto del departamento electronica',
      imagen: 'assets/electronica/teatrocasabose.jpg'
    },
    {
      id: 5,
      nombre: 'Bocina BOSE',
      precio: '1300$',
      descripcion: 'producto del departamento electronica',
      imagen: 'assets/electronica/bocinabose.jpg'
    },
  ];

  listafarmacia = [
    {
      id: 1,
      producto: 'Alchol 96',
      precio: '45$',
      descripcion: 'producto del departamento farmacia',
      imagen: 'assets/farmacia/alchol96.jpg'
    },
    {
      id: 2,
      nombre: 'Gasas',
      precio: '270$',
      descripcion: 'producto del departamento farmacia',
      imagen: 'assets/farmacia/gasas.jpg'
    },
    {
      id: 3,
      nombre: 'Pepto-Bismol',
      precio: '680$',
      descripcion: 'producto del departamento farmacia',
      imagen: 'assets/farmacia/peptobismol.jpg'
    },
    {
      id: 4,
      nombre: 'Tempra',
      precio: '704$',
      descripcion: 'producto del departamento farmacia',
      imagen: 'assets/farmacia/tempra.jpg'
    },
    {
      id: 5,
      nombre: 'Vaporub',
      precio: '112$',
      ddescripcion: 'producto del departamento farmacia',
      imagen: 'assets/farmacia/vaporub.jpg'
    },
  ];


  listalineablanca = [
    {
      id: 1,
      producto: 'Estufa MABE',
      precio: '4500$',
      descripcion: 'producto del departamento farmacia',
      imagen: 'assets/lineablanca/estufamabe.jpg'
    },
    {
      id: 2,
      nombre: 'Lavadora LG',
      precio: '2700$',
      descripcion: 'producto del departamento farmacia',
      imagen: 'assets/lineablanca/lavadoralg'
    },
    {
      id: 3,
      nombre: 'Licuadora Oster',
      precio: '6800$',
      descripcion: 'producto del departamento farmacia',
      imagen: 'assets/lineablanca/licuadoraoster.jpg'
    },
    {
      id: 4,
      nombre: 'Microondas LG',
      precio: '7040$',
      descripcion: 'producto del departamento farmacia',
      imagen: 'assets/lineablanca/mixroondas.jpg'
    },
    {
      id: 5,
      nombre: 'Refrigerador MADE',
      precio: '1120$',
      ddescripcion: 'producto del departamento farmacia',
      imagen: 'assets/lineablanca/refrigerador.jpg'
    },
  ];


  listamascotas = [
    {
      id: 1,
      producto: 'Croquetas Cat Chow',
      precio: '4500$',
      descripcion: 'producto del departamento farmacia',
      imagen: 'assets/mascotas/croquetascatchow.jpg'
    },
    {
      id: 2,
      nombre: 'Croquetas Dog Chow',
      precio: '270$',
      descripcion: 'producto del departamento farmacia',
      imagen: 'assets/mascotas/croquetasdogchow.jpg'
    },
    {
      id: 3,
      nombre: 'Croquetas FELIX',
      precio: '680$',
      descripcion: 'producto del departamento farmacia',
      imagen: 'assets/mascotas/croquetasfelix.jpg'
    },
    {
      id: 4,
      nombre: 'Plato para mascota plejable',
      precio: '704$',
      descripcion: 'producto del departamento farmacia',
      imagen: 'assets/mascotas/platomadcotaportable.jpg'
    },
    {
      id: 5,
      nombre: 'Plato para mascota alto',
      precio: '112$',
      ddescripcion: 'producto del departamento farmacia',
      imagen: 'assets/mascotas/platomascotaalto,jpg'
    },
  ];


  listavinosylicores = [
    {
      id: 1,
      producto: 'Bacardi',
      precio: '4500$',
      descripcion: 'producto del departamento farmacia',
      imagen: 'assets/vinosylicores/bacardi.jpg'
    },
    {
      id: 2,
      nombre: 'Champaña MOET',
      precio: '270$',
      descripcion: 'producto del departamento farmacia',
      imagen: 'assets/vinosylicores/champanamoet.jpg'
    },
    {
      id: 3,
      nombre: 'Tequila Circulo',
      precio: '680$',
      descripcion: 'producto del departamento farmacia',
      imagen: 'assets/vinosylicores/tequilacirculo.jpg'
    },
    {
      id: 4,
      nombre: 'Tequila Don Julio',
      precio: '704$',
      descripcion: 'producto del departamento farmacia',
      imagen: 'assets/vinosylicores/tequiladonjulio.jpg'
    },
    {
      id: 5,
      nombre: 'Vino Ruby',
      precio: '112$',
      ddescripcion: 'producto del departamento farmacia',
      imagen: 'assets/vinosylicores/vinoruby.jpg'
    },
  ];
  constructor() {}

  obtenerlistaelec() {
    return this.listaelectronica;
  }

  obtenerlistaelecid(id: number) {
    return this.listaelectronica[id];
  }

  obtenerlistafarm() {
    return this.listafarmacia;
  }

  obtenerlistalineablan() {
    return this.listalineablanca;
  }

  obtenerlistamas() {
    return this.listamascotas;
  }

  obtenerlistavinolicor() {
    return this.listavinosylicores;
  }

  obtenerlistavinolicorid(id: number) {
    return this.listavinosylicores[id];
  }

}
