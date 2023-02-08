import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/modelos/docente';
import { DocentesService } from 'src/app/servicios/docentes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consulta6',
  templateUrl: './consulta6.component.html',
  styleUrls: ['./consulta6.component.css']
})
export class Consulta6Component implements OnInit {

  titulo:string='Buscar docente por tipo y número de ID'
  objDocente?:Docente;
  tipoIdABuscar:string='';
  numIdABuscar:string='';

  constructor(private docenteService: DocentesService) { }

  ngOnInit(): void {
  }

  buscarDocente(){
    console.log(this.tipoIdABuscar);
    console.log(this.numIdABuscar);
    this.docenteService.getDocentePorTipoNumeroId(this.numIdABuscar,this.tipoIdABuscar).subscribe(res =>{
      console.log(res);
      this.objDocente = res
    },err=>{
      console.error(err);
      this.objDocente = undefined
      Swal.fire('Error al buscar','No se encontró al docente con tipo de identificación: '+ this.tipoIdABuscar + ' y número: '+ this.numIdABuscar,'error')
    })

  }
}
