const { indexController } = require('../controllers/index.controller');
const { router } = require('../modules/router');

class IndexRoutes {
    /** NO TOCAR ESTE ARREGLO 
     * Guarda las rutas enviadas por el config
    */
    routes = [
        { method: 'get', path: '/foo/:id', controller: indexController.getIdIndex },
        { method: 'get', path: '/dado', controller: indexController.getDaIndex },
        { method: 'get', path: '/go', controller: indexController.getIndex },
        { method: 'post', path: '/', controller: indexController.postIndex },
        { method: 'put', path: '/:user', controller: indexController.putIndex },
        { method: 'patch', path: '/:casa', controller: indexController.patchIndex },
        { method: 'delete', path: '/:direccion', controller: indexController.deleteIndex },
    ]

}
const indexRoutes = new IndexRoutes()
module.exports = { indexRoutes }