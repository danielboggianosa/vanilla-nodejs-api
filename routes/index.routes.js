const { indexController } = require('../controllers/index.controller');

class IndexRoutes {
    /** NO TOCAR ESTE ARREGLO 
     * Guarda las rutas enviadas por el config
    */

    routes = {
        '/': {
            get: indexController.getIndex,
            post: indexController.postIndex,
            put: indexController.putIndex,
            patch: indexController.patchIndex,
            delete: indexController.deleteIndex
        },
        '/foo': {
            get: indexController.getIdIndex
        }
    }

}
const indexRoutes = new IndexRoutes()
module.exports = { indexRoutes }