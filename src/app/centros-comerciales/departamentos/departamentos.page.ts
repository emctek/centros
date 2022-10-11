import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListadepartamentosService } from './listadepartamentos.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.page.html',
  styleUrls: ['./departamentos.page.scss'],
})
export class DepartamentosPage implements OnInit {

  listadep = [];

  constructor(private  listadepartamentos: ListadepartamentosService, private routerc: Router) { }

  ngOnInit() {
   this.listadep = this.listadepartamentos.obtenerlistadep();
  }

  onDepartamento() {


  }

}
