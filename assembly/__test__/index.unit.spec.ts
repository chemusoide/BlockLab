import * as contract from "..";
import { Context } from "near-sdk-as";

// ------------------------- USUARIOS ------------------------- //

// Prueba para la función registrarUsuario
describe("Registrar usuario",()=>{
  it("Debería registrar un usuario", () => {
    expect(() => {
      contract.registrarUsuario("Juan.testnet","Juan Perez","6380000000","test@test.com","123456");
    }).not.toThrow();
  });
  it("Debería fallar si no enviamos idCuenta", () => {
    expect(() => {
      contract.registrarUsuario("","Juan Perez","6380000000","test@test.com","123456");
    }).toThrow();
  });
  it("Debería fallar si no enviamos el nombre", () => {
    expect(() => {
      contract.registrarUsuario("Juan.testnet","","6380000000","test@test.com","123456");
    }).toThrow();
  });
  it("Debería fallar si no enviamos el número de teléfono", () => {
    expect(() => {
      contract.registrarUsuario("Juan.testnet","Juan Perez","","test@test.com","123456");
    }).toThrow();
  });
  it("Debería fallar si no enviamos el correo", () => {
    expect(() => {
      contract.registrarUsuario("Juan.testnet","Juan Perez","6380000000","","123456");
    }).toThrow();
  });
  it("Debería fallar si no enviamos contraseña", () => {
    expect(() => {
      contract.registrarUsuario("Juan.testnet","Juan Perez","6380000000","test@test.com","");
    }).toThrow();
  });
});

// Prueba para la función consultarUsuarios
describe("Consultar todos los usuarios",()=>{
  it("Debería consultar todos los usuarios", () => {
    expect(() => {
      contract.consultarUsuarios();
    }).not.toThrow();
  });
});

// Prueba para la función consultarUsuario
describe("consultar usuario por idCuenta",()=>{
  it("Debería consultar un usuario por su idCuenta", () => {
    expect(() => {
      contract.consultarUsuario("Juan.testnet");
    }).not.toThrow();
  });
  it("Debería fallar si no enviamos el idCuenta", () => {
    expect(() => {
      contract.consultarUsuario("");
    }).toThrow();
  });
});


// ------------------------- ANALÍTICAS ------------------------- //

// Prueba para la función registrarAnalitica
describe("Registrar analitica",()=>{
  it("Debería registrar una analitica", () => {
    expect(() => {
      contract.registrarAnalitica("Descripción de analitica","test@test.com");
    }).not.toThrow();
  });
  it("Debería fallar si no enviamos la descripción", () => {
    expect(() => {
      contract.registrarAnalitica("","ttest@test.com");
    }).toThrow();
  });
  it("Debería fallar si no enviamos el idUsuario", () => {
    expect(() => {
      contract.registrarAnalitica("Descripción de la analítica","");
    }).toThrow();
  });
});