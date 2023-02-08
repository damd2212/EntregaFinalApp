import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/modelos/docente';
import { DocentesService } from 'src/app/servicios/docentes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-docentes',
  templateUrl: './listar-docentes.component.html',
  styleUrls: ['./listar-docentes.component.css']
})
export class ListarDocentesComponent implements OnInit {
  
  docentes: Docente[] = []

  constructor(private docenteService: DocentesService) { }

  ngOnInit(): void {
    this.cargarDocente()
  }

  public cargarDocente(){
    this.docenteService.getDocentes().subscribe(response=>{
      if(response!=null){
        this.docentes=response
      }
    },error=>{
      Swal.fire('Error al listar los docentes', error, 'error');
    })
  }

}
