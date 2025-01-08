# Curso ANGULAR.JS

-Framework de JavaScript

- Jesús Conde

## Primeros pasos

- Instalamos AngularJs
  - Directo de la página, (puedes descargarlo)
- Instalamos Node.js
  - Desde la página oficial
  - En consola: **_npm init -y_**
  - **_npm i -g express-generator_**
  - Creamos un servidor con EXPRESS:
    -  **_express myserver_**
    -  **_npm install_**
    -  **_install --save-dev_**
- Instalamos Grunt
  - Es un automatizador de tareas
  - **_npm install -g grunt -cli
- **_YEOMAN_**
  - Workflow: 
    - es una colección de herramientas como: _GRUNT, GULP, BUILD, PACKAGE MANAGER (BOWER & NPM)_
    - **_npm install -g yo_**
    - **_npm install -g generator-angular_**
- Versión para producción:
  - **_grunt --force_**

#### SERVICES

- Permiten reutilizar código en la app
- Ejemplo:
  - Un Web Service
- Son objetos SINGLETON
  - Se inician solo 1 vez y perciten
- Son de carga ligera
  - Se cargan cuando un componente dependen de ello
- Son inyectados usando DI