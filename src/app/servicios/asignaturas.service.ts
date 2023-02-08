import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Asignatura } from '../modelos/asignatura';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})

export class AsignaturasService {

  private urlEndPoint: string = 'http://localhost:9090/api/asignaturas';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }
  
  getAsignaturasByName(nombre:string):Observable<Asignatura[]>{
    return this.http.get<Asignatura[]>(this.urlEndPoint+'/nombre?nombre='+nombre);
    }

  getAsignaturas():Observable<Asignatura[]>{
        try {
            return this.http.get<Asignatura[]>(this.urlEndPoint)
        } catch (error) {
          return throwError("Error al consultar las asignaturas " + error)
        }
    }
}
