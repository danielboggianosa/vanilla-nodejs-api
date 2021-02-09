const { indexController } = require('../controllers/index.controller');

class IndexRoutes {
    /** 
     * Guarda aquí todas tus rutas: {method:'get', path: '/foo/:id', controller: callback}
    */

    routes = [
        { method: 'get', path: '/foo/:id/:ojo', controller: indexController.getIdIndex },
        { method: 'get', path: '/dado', controller: indexController.getDaIndex },
        { method: 'get', path: '/go', controller: indexController.getIndex },
        { method: 'post', path: '', controller: indexController.postIndex },
        { method: 'put', path: '/:user', controller: indexController.putIndex },
        { method: 'patch', path: '/:casa', controller: indexController.patchIndex },
        { method: 'delete', path: '/:direccion', controller: indexController.deleteIndex },
    ]

}
const indexRoutes = new IndexRoutes()
module.exports = { indexRoutes }