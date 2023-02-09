import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Docente } from 'src/app/modelos/docente';
import { DocentesService } from 'src/app/servicios/docentes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-docente',
  templateUrl: './form-docente.component.html',
  styleUrls: ['./form-docente.component.css']
})
export class FormDocenteComponent implements OnInit {

  docente: Docente
  errores: string[] = []
  constructor(private docenteService: DocentesService, private router: Router) {
    this.docente = new Docente()
  }

  ngOnInit(): void {
  }

  registrarDocente() {
    this.docenteService.registrarDocente(this.docente).subscribe(
      res => {
        console.log(res.nombres)
        Swal.fire('Nuevo Docente', `Docente ${res.nombres} creado con éxito!`, 'success');
        this.router.navigate(['/docentes']);
      },
      (err: HttpErrorResponse) => {
        const map = new Map(Object.entries(err.error));
        const vector = Array.from(map.values());
        this.errores = vector as string[];
        console.error('Código del error desde el backend: ' + err.status);
      }
    )
  }

}
