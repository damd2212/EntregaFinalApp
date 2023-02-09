import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/modelos/estudiante';
import { EstudiantesService } from 'src/app/servicios/estudiantes.service';

@Component({
  selector: 'app-consulta4',
  templateUrl: './consulta4.component.html',
  styleUrls: ['./consulta4.component.css']
})
export class Consulta4Component implements OnInit {

  emailEstudiante : string = ""
  estudiante : Estudiante = new Estudiante()
  errores: string[] = []

  constructor(private estudianteService : EstudiantesService) { }

  ngOnInit(): void {
  }

  realizarConsulta(){
    this.errores = []
    this.estudiante = new Estudiante()
    this.estudianteService.buscarEstudianteByEmail(this.emailEstudiante).subscribe(
      res=>{
        this.estudiante = res
      },(err: HttpErrorResponse) => {
        const map = new Map(Object.entries(err.error));
        const vector = Array.from(map.values());
        this.errores = vector as string[];
        console.error('Código del error desde el backend: ' + err.status);
      }
    )
  }
}
