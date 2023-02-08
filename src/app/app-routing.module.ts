import { Consulta1Component } from './componentes/consultas/consulta1/consulta1.component';
import { FormCursoComponent } from './componentes/cursos/form-curso/form-curso.component';
import { ListarCursosComponent } from './componentes/cursos/listar-cursos/listar-cursos.component';
import { FormDocenteComponent } from './componentes/docentes/form-docente/form-docente.component';
import { ListarDocentesComponent } from './componentes/docentes/listar-docentes/listar-docentes.component';
import { FormEstudianteComponent } from './componentes/estudiantes/form-estudiante/form-estudiante.component';
import { ListarEstudiantesComponent } from './componentes/estudiantes/listar-estudiantes/listar-estudiantes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Consulta2Component } from './componentes/consultas/consulta2/consulta2.component';
import { Consulta3Component } from './componentes/consultas/consulta3/consulta3.component';
import { Consulta4Component } from './componentes/consultas/consulta4/consulta4.component';
import { Consulta5Component } from './componentes/consultas/consulta5/consulta5.component';
import { Consulta6Component } from './componentes/consultas/consulta6/consulta6.component';

const routes: Routes = [
  {path:'',redirectTo:'/estudiantes',pathMatch:'full'},
  {path:'estudiantes',component:ListarEstudiantesComponent},
  {path:'estudiantes/form',component:FormEstudianteComponent},
  {path:'estudiantes/form/:id',component:FormEstudianteComponent},
  {path:'docentes',component:ListarDocentesComponent},
  {path:'docentes/form',component:FormDocenteComponent},
  {path:'cursos',component:ListarCursosComponent},
  {path:'cursos/form',component:FormCursoComponent},
  {path:'consultas/consulta1',component:Consulta1Component},
  {path:'consultas/consulta2',component:Consulta2Component},
  {path:'consultas/consulta3',component:Consulta3Component},
  {path:'consultas/consulta4',component:Consulta4Component},
  {path:'consultas/consulta5',component:Consulta5Component},
  {path:'consultas/consulta6',component:Consulta6Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
