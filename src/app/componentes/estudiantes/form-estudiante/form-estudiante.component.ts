import { Estudiante } from './../../../modelos/estudiante';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-estudiante',
  templateUrl: './form-estudiante.component.html',
  styleUrls: ['./form-estudiante.component.css']
})
export class FormEstudianteComponent implements OnInit {
  title:String="Registrar Estudiante"
  public errores: string[] = [];
  creacion:Boolean=true
  student:Estudiante;
  constructor() {
    this.student=new Estudiante()
   }

  ngOnInit(): void {

  }
  crearEstudiante(){

  }
  updateEstudiante(){

  }

}
