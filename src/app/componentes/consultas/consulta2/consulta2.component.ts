import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Estudiante } from 'src/app/modelos/estudiante';
import { EstudiantesService } from 'src/app/servicios/estudiantes.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-consulta2',
  templateUrl: './consulta2.component.html',
  styleUrls: ['./consulta2.component.css'],
})
export class Consulta2Component implements OnInit {
  estudiantesEncontrados!: Estudiante[];
  listaIds: number[];
  idEstudiante  =new FormControl('');
  mensaje:any;

  constructor(private _estudianteService:EstudiantesService) {
    this.listaIds = [];
  }

  ngOnInit(): void {}

  buscar() {
    this._estudianteService.buscarByIdsEstudiantes(this.listaIds).subscribe(response=>{
      console.log(response);
      if(response!=null){
        this.estudiantesEncontrados=response
        this.listaIds=[]
      }else{
        this.estudiantesEncontrados=[]
      }

    },error=>{
      this.estudiantesEncontrados=[]
      Object.entries(error.error).forEach(([key, value]) => {

        if(key === 'mensaje'){
          this.mensaje = value
          console.log('Mensaje del back'+this.mensaje);
        }
      })
    })
  }

  agregar() {
    if(this.buscarID(Number(this.idEstudiante.value))==null){
      this.listaIds.push(Number(this.idEstudiante.value))
      this.idEstudiante.reset()
    }else{
      swal.fire('El identificador ' + this.idEstudiante.value + ' ya ha sido ingresado')
      this.idEstudiante.reset()
    }

  }

  borrar(id:number){
    let index = this.buscarID(id)
    if(index!=null){
      this.listaIds.splice(index,1)
    }
  }

  buscarID(id:number){
    for (let index = 0; index < this.listaIds.length; index++) {
      if(this.listaIds[index]==id){
        return index
      }

    }
    return null
  }
}
