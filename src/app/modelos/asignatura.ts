import { Curso } from "./curso"
import { Docente } from "./docente"

export class Asignatura {
    idAsignatura!:number
    nombre!:String
    listaDocentes?:Docente[]
    listaCursos?:Curso[]
}
