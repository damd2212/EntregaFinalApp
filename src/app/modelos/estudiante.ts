import { Direccion } from "./direccion";
import { Persona } from "./persona";
import { Telefono } from "./telefono";

export class Estudiante extends Persona {
  codigo!: number;
	correoElectronico!: string;
  objDireccion!:Direccion;
  listaTelefonos!:Telefono[];
}

