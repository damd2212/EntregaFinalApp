import { Telefono } from './../../../modelos/telefono';
import { Direccion } from './../../../modelos/direccion';
import { Estudiante } from './../../../modelos/estudiante';
import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';
import { NgModel } from '@angular/forms';
import { EstudiantesService } from 'src/app/servicios/estudiantes.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form-estudiante',
  templateUrl: './form-estudiante.component.html',
  styleUrls: ['./form-estudiante.component.css']
})
export class FormEstudianteComponent implements OnInit {
  title:String="Registrar Estudiante"
  dia=new Date().getDate()
  mess=new Date().getMonth()+1
  fecha:string


  public errores: string[] = [];
  creacion:Boolean=true
  student:Estudiante;
  telefono:Telefono | undefined
  constructor(private estudianteService: EstudiantesService, private router:Router,private rutaActiva: ActivatedRoute) {

    this.student=new Estudiante()
    this.student.objDireccion=new Direccion()
    this.student.listaTelefonos=[]
    this.fecha=new Date().getFullYear()+"-"
    if(this.mess<10){
      this.fecha=this.fecha+"0"+this.mess+"-"
    }else{
      this.fecha=this.fecha+this.mess+"-"
    }
    if(this.dia<10){
      this.fecha=this.fecha+"0"+this.dia
    }else{
      this.fecha=this.fecha+this.dia
    }

   }

  ngOnInit(): void {
    this.cargarStudiante()
  }
  cargarStudiante(): void{
    this.rutaActiva.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.estudianteService.getStudent(id).subscribe( (studentObj) => this.student = studentObj)
        this.telefono=undefined
        this.creacion=false
      }else{
        this.telefono=new Telefono()
      }
    })
  }

  crearEstudiante(){
    this.estudianteService.create(this.student).subscribe(
      respose =>
      {
        this.router.navigate(['/estudiantes']),
        swal.fire('Nuevo estudiante', `Estudiante${respose.nombres} creado con ??xito!`, 'success');
     },
     (err: HttpErrorResponse )=> {
      const map = new Map(Object.entries(err.error));
      const vector= Array.from(map.values());
      this.errores =vector as string[];
      console.log('C??digo del error desde el backend: ' + err.status);
     }
    )
  }
  updateEstudiante(){
    this.estudianteService.update(this.student)
    .subscribe(
      respose  => {
        this.router.navigate(['/estudiantes']);
        swal.fire('Estudiante Actualizado', `Estudiante ${respose.nombres} actualizado con ??xito!`, 'success');
      },
      (err: HttpErrorResponse )=> {
                const map = new Map(Object.entries(err.error));
                const vector= Array.from(map.values());
                this.errores =vector as string[];
                console.error('C??digo del error desde el backend: ' + err.status);
              }
    )
  }
  crearTelefono(){
    this.student.listaTelefonos.push(this.telefono!)
    this.telefono=new Telefono()
  }
  editarTelefono(){
    this.student.listaTelefonos.push(this.telefono!)
    this.telefono=undefined
  }
  cargarTelefono(tel: Telefono | undefined){
    this.telefono=tel
    this.student.listaTelefonos=this.student.listaTelefonos.filter(cell=>cell.idTelefono!=this.telefono?.idTelefono)
  }
  eliminarTelefono(tel:Telefono)
  {
    this.student.listaTelefonos=this.student.listaTelefonos.filter(cell=>cell!=tel)
  }
}
