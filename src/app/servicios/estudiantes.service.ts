import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Estudiante } from '../modelos/estudiante';
import swal from 'sweetalert2';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  private urlEndPoint:string = "http://localhost:9090/api/estudiantes";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http:HttpClient,private router: Router) { }
  getStudent(id:number): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(
        e => {
          this.router.navigate(['/estudiantes']);
          console.error(e.error.mensaje);
          swal.fire('Error al editar', e.error.mensaje, 'error');
           return throwError(() => new Error(e));
      })
    );
  }
  create(cliente:Estudiante):Observable<Estudiante>{
    return this.http.post<Estudiante>(this.urlEndPoint,cliente,{headers:this.httpHeaders}).pipe(
      catchError(
        e=>{
          if (e.status == 400) {
            return throwError(e);
            }
            console.log(e.error.mensaje);
            swal.fire('Error al crear el estudiante', e.error.mensaje, 'error');
            return throwError(e);
        }
      )
    );
  }
  update(student: Estudiante): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${student.idPersona}`, student, { headers: this.httpHeaders }).pipe(
      catchError(
         e => {

          if (e.status == 400) {
            return throwError(e);
          }

        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(() => new Error(e));
      })
    );
  }
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
      return this.http.get<Estudiante[]>(this.urlEndPoint+"/nombres_apellidos_email?nombres="+nombres+"&apellidos="+apellidos+"&correoElectronico="+correo)
  }

  buscarByIdsEstudiantes(listaIdsEstudiantes:number[]):Observable<Estudiante[]>{
      return this.http.post<Estudiante[]>(this.urlEndPoint+"/buscar",listaIdsEstudiantes)
  }

  buscarEstudianteByEmail(correoElectronico: string): Observable<Estudiante> {
    return this.http.get<Estudiante>(this.urlEndPoint + "/buscarPorEmail?correoElectronico=" + correoElectronico)
  }

}
