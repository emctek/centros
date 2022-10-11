import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListadepartamentosService {

  listadepartamentos = [
    {
      id: '1',
      nombre: 'Electronica',
      imagen: 'assets/departamentos/electronica.jpg',
    },
    {
      id: '2',
      nombre: 'Farmacia',
      imagen: 'assets/departamentos/farmacia.jpg',
    },
    {
      id: '3',
      nombre: 'Linea Blanca',
      imagen: 'assets/departamentos/lineablanca.jpg',
    },
    {
      id: '4',
      nombre: 'Mascotas',
      imagen: 'assets/departamentos/mascotas.jpg',
    },
    {
      id: '5',
      nombre: 'Vinos y Licores',
      imagen: 'assets/departamentos/vinosylicores.jpg',
    },
  ];
  constructor() {}

  obtenerlistadep() {
    return this.listadepartamentos;
  }
}
