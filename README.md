# Servidor REST API sin frameworks
Este servidor está listo para comenzar a recibir y manejar peticiones. Dejo los archivos de rutas y controladores de ejemplo, se pueden añadir nuevas rutas, nuevos controladores, servicios y modelos según considere. Todo el enrutamiento está hecho con elementos nativos de Node Js en su versión más reciente (15.7.0).

## Getting Started
Para iniciar el proyecto, ejecutar el comando `npm start`

Una vez iniciado, desde otra consola o herramienta intenta hacer una petición a cualquiera de las rutas registradas en el ``indexRoutes``

Por ejemplo: `curl '[::1]:5000/api?id=14&user=daniel' -i`

## Agregar Rutas
Para agregar un nueva ruta debes indicar cual será la ruta base en el archivo `index.js` e indicar el archivo de donde obtendrá las rutas secundarias.

Por ejemplo si la ruta completa es `/api/foo/someparam`. La base sería `/api`.

En el archivo de rutas ubicado en la carpeta `routes` se debe crear un archivo que contenga un arreglo llamado ``routes`` donde se deben agregar las rutas secundarias que pueden contener parámetros dentro de ella. Si deseas agregar parámetros dentro de la url puedes hacerlo anteponiendo "`:`" antes del nombre de la variable.

Ejemplo:
```javascript
const {indexController} = require('../controllers/index.controller');
class IndexRoutes {
routes = [
        { 
            method: 'get', 
            path: '/foo/:id/', 
            controller: indexController.getIdIndex 
        },
        { method: 'post', path: '', controller: indexController.postIndex },
        { method: 'put', path: '/:user', controller: indexController.putIndex },
        { method: 'patch', path: '/:casa', controller: indexController.patchIndex },
        { method: 'delete', path: '/:direccion', controller: indexController.deleteIndex },
    ]
}
const indexRoutes = new IndexRoutes()
module.exports = { indexRoutes }
```

## Agregar Controlador
Crear un archivo con el nombre correspondiente y los métodos o funciones necesarios para manejar las peticiones que recibirá el servidor.

Ejemplo:
```javascript
class Controller {
    async getIndex(req, res) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ msg: 'Bienvenido al index GET' }))
    }
}
const indexController = new Controller();
module.exports = { indexController }
```
### Consideraciones
* Este repositorio no es un producto final sino que solo es una muestra para que puedan ver algunas de mis habilidades como desarrollador.
* Para mayor información de mi, me pueden escribir a coach@danielboggiano.com o en mi web www.danielboggiano.com