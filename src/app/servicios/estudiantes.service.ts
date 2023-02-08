import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Estudiante } from '../modelos/estudiante';


@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  private urlEndPoint:string = "http://localhost:9090/api/estudiantes";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http:HttpClient) { }

  getEstudiantes():Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(this.urlEndPoint+'/todos');
  }

  getEstudianteById(id:number):Observable<Estudiante>{
    return this.http.get<Estudiante>(this.urlEndPoint+'/'+id)
  }

  deleteEstudiante(id:number):Observable<Boolean>{
    return this.http.delete<Boolean>(this.urlEndPoint+'/'+id)
  }

  getEstudiantePorTipoNumeroId(tipoId:string,numeroId:string):Observable<Estudiante>{
    return this.http.get<Estudiante>(this.urlEndPoint+'/exist?tipoIdentificacion='+tipoId+'&noIdentificacion='+numeroId)

  }

  buscarPorNombresApellidosEmail(nombres:String,apellidos:String,correo:String):Observable<Estudiante[]>{
    try {
      return this.http.get<Estudiante[]>(this.urlEndPoint+"/nombres_apellidos_email?nombres="+nombres+"&apellidos="+apellidos+"&correoElectronico="+correo)
    } catch (error) {
      return throwError("Error al consultar estudiantes por nombres, apellidos y correo " + error)
    }
  }

  buscarByIdsEstudiantes(listaIdsEstudiantes:number[]):Observable<Estudiante[]>{
    try {
      return this.http.post<Estudiante[]>(this.urlEndPoint+"/buscar",listaIdsEstudiantes)
    } catch (error) {
      return throwError("Error al consultar estudiantes por lista de identificadores " + error)
    }
  }



}
