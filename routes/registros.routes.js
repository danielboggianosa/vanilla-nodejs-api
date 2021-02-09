const { registrosController } = require('../controllers/registros.controller')

class RegistrosRoutes {
    routes = {
        '/': {
            'get': registrosController.getOneRegistro
        }
    }
}

const registrosRoutes = new RegistrosRoutes()
module.exports = { registrosRoutes }