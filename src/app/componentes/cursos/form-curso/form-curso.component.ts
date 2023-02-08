import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/modelos/curso';
import { CursosService } from 'src/app/servicios/cursos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.css']
})
export class FormCursoComponent implements OnInit {

  public curso: Curso = new Curso();
  public titulo: string = 'Formulario registro de curso';
  public errores: string[] = [];

  constructor(private cursosService: CursosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public crearCurso(): void{
    this.cursosService.createCurso(this.curso).subscribe(
      response => 
        {
          console.log(response.nombre);
          this.router.navigate(['cursos/form-curso']);
          Swal.fire('Nuevo curso', `Curso ${response.nombre} creado con éxito!`, 'success');
        },
        (err: HttpErrorResponse ) => {
          const map = new Map(Object.entries(err.error));
          const vector = Array.from(map.values());
          this.errores = vector as string[]; 
          console.error('Código del error desde el backend: ' + err.status);
        }
    )
  }

}
