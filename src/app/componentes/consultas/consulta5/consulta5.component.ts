import { Estudiante } from 'src/app/modelos/estudiante';
import { EstudiantesService } from './../../../servicios/estudiantes.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consulta5',
  templateUrl: './consulta5.component.html',
  styleUrls: ['./consulta5.component.css']
})
export class Consulta5Component implements OnInit {

  titulo:string='Buscar estudiante por tipo y numero de ID'
  objEstudiante?:Estudiante;
  tipoIdABuscar:string='';
  numIdABuscar:string='';

  constructor(private estudianteService:EstudiantesService) { }

  ngOnInit(): void {
  }

  buscarEstudiante(){
    console.log(this.tipoIdABuscar);
    console.log(this.numIdABuscar);
    this.estudianteService.getEstudiantePorTipoNumeroId(this.tipoIdABuscar,this.numIdABuscar).subscribe(res =>{
      console.log(res);
      this.objEstudiante = res
    },err=>{
      console.error(err);
      this.objEstudiante = undefined
      Swal.fire('Error al buscar','No se encontro al estudiante con tipo de identificacion: '+ this.tipoIdABuscar + ' y numero: '+ this.numIdABuscar,'error')
    })

  }

}
