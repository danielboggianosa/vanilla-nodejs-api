const { registrosController } = require('../controllers/registros.controller')

class RegistrosRoutes {
    routes = [
        { method: 'get', path: '/', controller: registrosController.getOneRegistro }
    ]
}

const registrosRoutes = new RegistrosRoutes()
module.exports = { registrosRoutes }