import { logging } from 'near-sdk-as'
import { usuarios, Usuario, analiticas, Analitica} from "./models";

// ------------------------- Métodos del smart contract de USUARIOS ------------------------- //

// Método para registrar un nuevo usuario
export function registrarUsuario(idCuenta: string, nombre: string, telefono: string, correo: string, password: string): void{
  assert(idCuenta.length>0,"La cuenta a la que pertenece el usuario es requerida");
  assert(nombre.length>0 ,"El nombre es requerido");
  assert(telefono.length>0,"El teléfono es requerido");
  assert(correo.length>0,"El correo es requerido");
  assert(password.length>0,"La contraseña es requerida");

  let usuario = new Usuario(idCuenta, nombre, telefono, correo, password);
  usuarios.push(usuario);
}

// Método para consultar todos los usuarios
export function consultarUsuarios(): Array<Usuario>{
  let result = new Array<Usuario>(usuarios.length);
  for (let i = 0; i < usuarios.length; i++){
    let usuario = usuarios[i];
    usuario.password = '';
    result[i] = usuario;
  }
  return result;
}

// Método para consultar un usuario por el id de cuenta
export function consultarUsuario(idCuenta: string): Usuario | null {
  assert(idCuenta.length>0,"La cuenta es requerida");
  let result = new Array<Usuario>();
  for (let i = 0; i < usuarios.length; i++) {
    result.push(usuarios[i])
    
  }
  return null;
}

// ------------------------- Métodos del smart contract de ANALITICAS ------------------------- //

// Método para registrar una Analitica
export function registrarAnalitica(descripcion: string, idUsuario: string): void{
  assert(descripcion.length>0,"La descripción es requerida");
  assert(idUsuario.length>0,"El idUsuario es requerido");
  let analitica = new Analitica(analiticas.length, descripcion, idUsuario);
  analiticas.push(analitica);
}

// Método para consultar todos las analiticas de un usuario
export function consultarAnaliticasUsuario(idUsuario: string): Array<Analitica>{
  assert(idUsuario.length>0,"El idUsuario es requerido");
  let result = new Array<Analitica>();
  for (let i = 0; i < analiticas.length; i++){
    if(analiticas[i].idUsuario == idUsuario){
      result.push(analiticas[i])
    }  
  }
  return result;
}