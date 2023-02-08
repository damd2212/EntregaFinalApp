import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asignatura } from '../modelos/asignatura';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  private urlEndPoint:string = "http://localhost:9090/api/asignaturas";

  constructor(private http:HttpClient) { }

  getAsignaturasByName(nombre:string):Observable<Asignatura[]>{
    return this.http.get<Asignatura[]>(this.urlEndPoint+'/nombre?nombre='+nombre);
  }
}
