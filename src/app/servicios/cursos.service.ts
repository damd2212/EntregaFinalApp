import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Curso } from '../modelos/curso';

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

}
