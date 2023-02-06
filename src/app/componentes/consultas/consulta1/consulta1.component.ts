import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/modelos/estudiante';
import { EstudiantesService } from 'src/app/servicios/estudiantes.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-consulta1',
  templateUrl: './consulta1.component.html',
  styleUrls: ['./consulta1.component.css']
})
export class Consulta1Component implements OnInit {

  nombres:String=""
  apellidos:String=""
  correo:String=""
  estudiantesEncontrados!:Estudiante[]

  constructor(private _estudianteService: EstudiantesService) { }

  ngOnInit(): void {
  }

  buscar(){
    if(this.nombres!="" || this.apellidos!="" || this.correo!=""){
      this._estudianteService.buscarPorNombresApellidosEmail(this.nombres,this.apellidos,this.correo).subscribe(response=>{
        console.log(response);
        if(response!=null){
          this.estudiantesEncontrados=response
        }else{
          this.estudiantesEncontrados=[]
        }
      },error=>{
        swal.fire('Error al buscar los estudiantes', error, 'error');
      })
    }else{
      swal.fire('Datos inválidos', 'Al menos debe ingresar el valor de uno de los campos', 'info');
    }
    this.nombres=""
    this.apellidos=""
    this.correo=""
  }

}
