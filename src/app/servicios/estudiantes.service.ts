import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../modelos/estudiante';


@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  private urlEndPoint:string = "http://localhost:9090/api/estudiantes";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http:HttpClient) { }

  getEstudiantes():Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(this.urlEndPoint);
  }

}
