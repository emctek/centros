import { Component, OnInit } from '@angular/core';
import { FormBuilder, MaxValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-datosg',
  templateUrl: './datosg.component.html',
  styleUrls: ['./datosg.component.scss'],
})
export class DatosgComponent implements OnInit {

  datosgenerales;

  constructor(private fb: FormBuilder) {

    this.datosgenerales = fb.group({
      nombre: ['eleazar',Validators.required],
      matricula: [201520721,Validators.required],
      contrasena: ['momo',Validators.required],
      correo: ['eleazarm99@gmail.com',Validators.required],
      telefono: [5534856875,Validators.required]
    });

  }

  ngOnInit() { }

}
