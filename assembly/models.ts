import { PersistentVector } from "near-sdk-as";

// Exportando la clase Usuario
@nearBindgen
export class Usuario {
    idUsuario: string;
    nombre: string;
    telefono: string;
    correo: string;
    password: string;
    
    constructor(idCuenta: string, nombre: string, telefono: string, correo: string, password: string){
        this.idUsuario = idCuenta;
        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.password = password;
    }   
}

// Exportando la clase Analitica
@nearBindgen
export class Analitica {
    idAnalitica: u64;
    analitica: string;
    idUsuario: string;

    constructor(idAnalitica: u64, analitica: string, idUsuario: string){
        this.idAnalitica = idAnalitica;
        this.analitica = analitica;
        this.idUsuario = idUsuario;
    }   
}

 export const usuarios = new PersistentVector<Usuario>("u");
 export const analiticas = new PersistentVector<Analitica>("a"); 