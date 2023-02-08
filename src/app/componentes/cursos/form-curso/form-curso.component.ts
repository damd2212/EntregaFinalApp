import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/modelos/curso';
import { CursosService } from 'src/app/servicios/cursos.service';
import Swal from 'sweetalert2';
import { AsignaturaService } from 'src/app/servicios/asignaturas.service';
import { Observable } from 'rxjs';
import { Asignatura } from 'src/app/modelos/asignatura';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.css']
})
export class FormCursoComponent implements OnInit {

  public curso: Curso = new Curso();
  public titulo: string = 'Formulario registro de curso';
  public errores: string[] = [];
  public asignaturas: Asignatura[] = [];
  public codigo = '';

  constructor(private cursosService: CursosService, private asignaturaService: AsignaturaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAsignaturas();
  }

  public crearCurso(): void{
    this.cursosService.createCurso(this.curso, this.codigo).subscribe(
      response => 
        {
          console.log(response.nombre);
          Swal.fire('Nuevo curso', `Curso ${response.nombre} creado con éxito!`, 'success');
          this.router.navigate(['/cursos']);
        },
        (err: HttpErrorResponse ) => {
          const map = new Map(Object.entries(err.error));
          const vector = Array.from(map.values());
          this.errores = vector as string[]; 
          console.error('Código del error desde el backend: ' + err.status);
        }
    )
  }
  
  public getAsignaturas(): void{

    this.asignaturaService.getAsignaturas().subscribe(
      res => {
        this.asignaturas = res;
      },
      (err: HttpErrorResponse) => {
        Swal.fire('Obtener asignaturas',`Error al cargar las asignaturas`, 'error');
      }
    )
  }

}
