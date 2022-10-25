import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
})
export class OpcionesPage implements OnInit {

frutas = ["naranjas","uvas","sandias","frasas","mangos","tunas"];

  constructor() { }

  ngOnInit() {
  }

  onEscoge($event){

  console.log($event.target.value);

  }

}
