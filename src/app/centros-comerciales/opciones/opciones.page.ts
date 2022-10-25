import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
})
export class OpcionesPage implements OnInit {
  frutas = ['naranjas', 'uvas', 'sandias', 'frasas', 'mangos', 'tunas'];

  computadoras = ['lenovo', 'hp', 'acer', 'dell', 'lanix', 'toshiba'];

  constructor() {}

  ngOnInit() {}

  onEscoge($event) {
    console.log($event.target.value);
  }

  onSelecciona($event) {
    console.log($event.target.value);
  }
}
