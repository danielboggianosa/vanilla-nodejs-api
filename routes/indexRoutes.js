const { indexController } = require('../controllers/indexController')

class IndexRoutes {
    /** NO TOCAR ESTE ARREGLO 
     * Guarda las rutas enviadas por el config
    */
    registeredRoutes = []

    constructor() {
        this.routes();
    }

    /**
     * Esta función sirve para agregar las rutas secundaras. Debes usar la función "this.use" y pasarle los parámetros MÉTODO (String), URL (String), CONTROLADOR (Función del controlador)
     */
    routes() {
        this.use('GET', '/', indexController.getIndex)
        this.use('POST', '/', indexController.postIndex)
        this.use('PUT', '/', indexController.putIndex)
        this.use('DELETE', '/', indexController.deleteIndex)
    }

    /** NO TOCAR ESTA FUNCIÓN 
     * Es la encargada de llenar el arreglo de rutas registradas
    */
    use(method, url, controller) {
        this.registeredRoutes.push({ method, url, controller })
    }
}
const indexRoutes = new IndexRoutes()
module.exports = { indexRoutes }