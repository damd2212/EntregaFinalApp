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
  public errores: string[] = [];

  constructor(private estudianteService:EstudiantesService) { }

  ngOnInit(): void {
    this.estudianteService.getEstudiantes().subscribe(res=>{
      console.log(res);
      if (res!= null) {
        this.estudiantes = res
      }else{
        this.estudiantes = []
      }
    },err=>{
      Swal.fire('Error de carga de estudiantes','Error al cargar los estudiantes de la base de datos','error');
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
    },err=>{
      console.log(err.error);
      console.log(err.error.codigoError);
      console.log(typeof(err.error));
      console.error('Codigo del error desde el back: ' + err.status);
      this.errores = [];
      let auxMensaje='';
      Object.entries(err.error).forEach(([key,value])=>{
        auxMensaje = key + ': ' + value
        console.log(auxMensaje);
        this.errores.push(auxMensaje)
      })
    }


    )

  }

  cargarEstudainte(idestudiante:number){

    console.log(idestudiante);

    this.estudianteService.getEstudianteById(idestudiante).subscribe(res =>{
      console.log(res);
      this.objEstudiante = res
      console.log(this.objEstudiante.objDireccion);
      this.objDireccion = this.objEstudiante.objDireccion
      this.objTelefonos = this.objEstudiante.listaTelefonos
    },err=>{
      Swal.fire('Error de busqueda','Error al buscar un estudiante en especifico','error');
    })
  }

}
