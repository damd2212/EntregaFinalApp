import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/modelos/estudiante';
import { EstudiantesService } from 'src/app/servicios/estudiantes.service';

@Component({
  selector: 'app-listar-estudiantes',
  templateUrl: './listar-estudiantes.component.html',
  styleUrls: ['./listar-estudiantes.component.css']
})
export class ListarEstudiantesComponent implements OnInit {
  estudiantes:Estudiante[] = [];

  constructor(private estudianteService:EstudiantesService) { }

  ngOnInit(): void {
    this.estudianteService.getEstudiantes().subscribe(res=>{
      console.log(res);
      this.estudiantes = res
    })
  }

  eliminarEstudiante(id:number){
    console.log("Presiono eliminar");

  }

}
