import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { Docente } from '../modelos/docente';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {

  private urlEndPoint: string = 'http://localhost:9090/api/docentes';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  constructor(private http: HttpClient) { }

  getDocentes():Observable<Docente[]>{
    try {
      return this.http.get<Docente[]>(this.urlEndPoint)
    } catch (error) {
      return throwError("Error al consultar los docentes " + error)
    }
  }
  getDocentePorTipoNumeroId(numeroId:string,tipoId:string):Observable<Docente>{
    return this.http.get<Docente>(this.urlEndPoint+'/exist?noIdentificacion='+numeroId + '&tipoIdentificacion='+tipoId)
  }

  registrarDocente(objDocente : Docente) : Observable<Docente>{
    return this.http.post<Docente>(this.urlEndPoint,objDocente, {headers: this.httpHeaders})
  }
}
