import { Direccion } from "./direccion";
import { Persona } from "./persona";
import { Telefono } from "./telefono";

export class Estudiante extends Persona {
  fechaIngreso!:Date;
	correoElectronico!: string;
  objDireccion!:Direccion;
  listaTelefonos!:Telefono[];
}

