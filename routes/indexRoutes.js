const { indexController } = require('../controllers/indexController')

class IndexRoutes {
    registeredRoutes = []

    constructor() {
        this.config();
    }

    config() {
        this.use('GET', '/', indexController.getIndex)
        this.use('POST', '/', indexController.postIndex)
        this.use('PUT', '/', indexController.putIndex)
        this.use('DELETE', '/', indexController.deleteIndex)
    }

    use(method, url, controller) {
        this.registeredRoutes.push({ method, url, controller })
    }
}
const indexRoutes = new IndexRoutes()
module.exports = { indexRoutes }