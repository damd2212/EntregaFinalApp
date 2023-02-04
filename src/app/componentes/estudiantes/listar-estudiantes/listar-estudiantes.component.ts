import { Direccion } from './../../../modelos/direccion';
import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/modelos/estudiante';
import { EstudiantesService } from 'src/app/servicios/estudiantes.service';
import Swal from 'sweetalert2';
import { Telefono } from 'src/app/modelos/telefono';

@Component({
  selector: 'app-listar-estudiantes',
  templateUrl: './listar-estudiantes.component.html',
  styleUrls: ['./listar-estudiantes.component.css']
})
export class ListarEstudiantesComponent implements OnInit {
  estudiantes:Estudiante[] = [];

  objEstudiante:Estudiante = new Estudiante();
  objDireccion:Direccion = new Direccion();
  objTelefonos: Telefono[] = [];

  constructor(private estudianteService:EstudiantesService) { }

  ngOnInit(): void {
    this.estudianteService.getEstudiantes().subscribe(res=>{
      console.log(res);
      this.estudiantes = res
    })
  }

  eliminarEstudiante(id:number){
    this.estudianteService.deleteEstudiante(id).subscribe(res=>{
      if (res) {

        Swal.fire('Esudiante eliminado','Estudiante con identificacion '+ id + ' eliminado correctamente!','success');
      } else {
        Swal.fire('Error de eliminacion','Error al eliminar el estudainte con codigo','success');
      }
      this.ngOnInit()
    })

  }

  cargarEstudainte(estudiante:Estudiante){
    this.objEstudiante = estudiante;
    this.objDireccion = this.objEstudiante.objDireccion
    this.objTelefonos = this.objEstudiante.listaTelefonos
  }

}
