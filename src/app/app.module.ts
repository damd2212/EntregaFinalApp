import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarEstudiantesComponent } from './componentes/estudiantes/listar-estudiantes/listar-estudiantes.component';
import { FormEstudianteComponent } from './componentes/estudiantes/form-estudiante/form-estudiante.component';
import { FormCursoComponent } from './componentes/cursos/form-curso/form-curso.component';
import { ListarCursosComponent } from './componentes/cursos/listar-cursos/listar-cursos.component';
import { ListarDocentesComponent } from './componentes/docentes/listar-docentes/listar-docentes.component';
import { FormDocenteComponent } from './componentes/docentes/form-docente/form-docente.component';
import { HeaderComponent } from './componentes/layouts/header/header.component';
import { FooterComponent } from './componentes/layouts/footer/footer.component';
import { Consulta1Component } from './componentes/consultas/consulta1/consulta1.component';
import { Consulta2Component } from './componentes/consultas/consulta2/consulta2.component';
import { Consulta3Component } from './componentes/consultas/consulta3/consulta3.component';
import { Consulta4Component } from './componentes/consultas/consulta4/consulta4.component';
import { Consulta5Component } from './componentes/consultas/consulta5/consulta5.component';
import { Consulta6Component } from './componentes/consultas/consulta6/consulta6.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarEstudiantesComponent,
    FormEstudianteComponent,
    FormCursoComponent,
    ListarCursosComponent,
    ListarDocentesComponent,
    FormDocenteComponent,
    HeaderComponent,
    FooterComponent,
    Consulta1Component,
    Consulta2Component,
    Consulta3Component,
    Consulta4Component,
    Consulta5Component,
    Consulta6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
