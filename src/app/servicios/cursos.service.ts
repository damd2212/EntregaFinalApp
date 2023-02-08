import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Curso } from '../modelos/curso';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private urlEndPoint: string = 'http://localhost:9090/api/cursos';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getCursos():Observable<Curso[]>{
    try {
      return this.http.get<Curso[]>(this.urlEndPoint)
    } catch (error) {
      return throwError("Error al consultar los cursos " + error)
    }
  }

  getCurso(idCurso:String):Observable<Curso>{
    try {
      return this.http.get<Curso>(this.urlEndPoint+"/"+idCurso)
    } catch (error) {
      return throwError("Erro al consultar el curso " + idCurso + " " +  error)
    }
  }

  createCurso(curso:Curso, idAsignatura: string) : Observable<Curso> {
    return this.http.post<Curso>(this.urlEndPoint + "/?asignatura=" + idAsignatura, curso, {headers: this.httpHeaders}).pipe(
      catchError(
        e => {
          if (e.status == 400) {
            return throwError(e);
          }
          console.log(e.error.mensaje);
          Swal.fire('Error al crear el curso', e.error.mensaje, 'error');
          return throwError(e);
        })
      );
  }

}
