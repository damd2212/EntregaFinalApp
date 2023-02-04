import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/modelos/curso';
import { CursosService } from 'src/app/servicios/cursos.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {

  cursos : Curso[]=[]
  cursoSeleccionado!:Curso

  constructor(private _cursoService : CursosService) { }

  ngOnInit(): void {
    this._cursoService.getCursos().subscribe(response=>{
      if(response!=null){
        this.cursos=response
      }
    },error=>{
      swal.fire('Error al listar los cursos', error, 'error');
    })
  }

  seleccionarCurso(idCurso:String){
    this.cursos.forEach(curso => {
      if(idCurso==curso.idCurso){
        this.cursoSeleccionado=curso
      }
    });
  }

}
