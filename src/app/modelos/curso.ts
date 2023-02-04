import { Asignatura } from "./asignatura"

export class Curso {
    idCurso!:String
    nombre!: String
    periodo!:number
    objAsignatura?:Asignatura
}
