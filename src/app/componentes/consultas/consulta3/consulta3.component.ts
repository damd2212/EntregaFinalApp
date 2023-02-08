import { Component, OnInit } from '@angular/core';
import { Asignatura } from 'src/app/modelos/asignatura';
import { AsignaturasService } from 'src/app/servicios/asignaturas.service';

@Component({
  selector: 'app-consulta3',
  templateUrl: './consulta3.component.html',
  styleUrls: ['./consulta3.component.css']
})
export class Consulta3Component implements OnInit {

  nombreBusqueda:string='';
  titulo:string='Buscar asignatura por nombre'
  asignaturas:Asignatura[] = [];

  constructor(private asignaturaService:AsignaturasService) { }

  ngOnInit(): void {

  }

  buscarPorNombre(){
    console.log('Entro a buscar por nombre');
    console.log(this.nombreBusqueda);
    console.log();

    if (this.nombreBusqueda.length <= 0) {
      this.asignaturas = []

    }else{
      this.asignaturaService.getAsignaturasByName(this.nombreBusqueda).subscribe(res =>{
        console.log(res);

        if (res != null) {
          this.asignaturas = res
        }else{
          this.asignaturas = []
        }
      })
    }


  }

}
