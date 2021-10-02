# `BlockLAB`

📄 Descripción
==================

BlockLAB es un contrato inteligente en el que puede crear un usuario al que se le puede añadir la información de análisis clínicos. Las siguientes son las principales funcionalidades de este contrato inteligente:

1. Crear un usuario.
2. Consultar un usuario por su id.
3. Añadir un análisis.
4. Consultar análisis

📦 Instalación
================

Para ejecutar este proyecto localmente, debe seguir los siguientes pasos:

Paso 1: Prerequisitos
---- 

1. Asegúrese de haber instalado [Node.js] ≥ 12 (recomendamos usar [nvm])
2. Asegúrese de haber instalado yarn: `npm install -g yarn`
3. Instalar dependencias: `yarn install`
4. Cree una cuenta de prueba NEAR [https://wallet.testnet.near.org/]
5. Instale NEAR CLI globalmente: [near-cli] es una interfaz de línea de comandos (CLI) para interactuar con NEAR blockchain

	yarn install --global near-cli

Step 2: Configuración de NEAR CLI
---- 

Configure su near-cli para autorizar su cuenta de prueba creada recientemente:

	near login

Paso 3: Cree y realice una implementación de desarrollo de contrato inteligente
---- 

Cree el código del contrato inteligente de NEARLancers e implemente el servidor de desarrollo local: `yarn build` (consulte`package.json` para obtener una lista completa de `scripts` que puede ejecutar con`yarn`). Este script le devuelve un contrato inteligente provisional implementado (guárdelo para usarlo más tarde). Para desplegar el contrato generado con `yarn build` en testnet [https://wallet.testnet.near.org/], ejecutar el comando `yarn deploy` el cual nos regresará el id del contrato desplegado el cuál usaremos para ejecutar cada uno de los métodos que contiene el contrato.

📑 Explorando los métodos de contrato inteligente NEARLancers
==================

Los siguientes comandos le permiten interactuar con los métodos del contrato inteligente utilizando NEAR CLI (para esto, debe tener implementado un contrato inteligente provisional).

Comando para crear usuario: 
---- 
	near call $CONTRACT registrarUsuario '{ "idCuenta":"string", "nombre":"string", "telefono":"string", "correo":"string", "password":"string"}' --account-id <your test account>

Comando para consultar todos los usuarios:
---- 
	near view $CONTRACT consultarUsuarios


Comando para guardar una analica:
---- 
	near call $CONTRACT registrarServicio '{ "descripción":"string", "idUsuario":"string"}' --account-id <your test account>

Comando para consultar todos la analítica de un usuario:
---- 
	near view $CONTRACT consultarAnaliticasUsuario '{"idUsuario":"string"}'


🖥️ Interfáz gráfica de usuario
---- 
	https://www.figma.com/files/project/39502420/Team-project?fuid=1025893206186787859
