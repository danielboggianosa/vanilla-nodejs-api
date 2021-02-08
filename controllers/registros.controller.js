const { Registros } = require('../models/registros.model')

class RegistrosController {

    async getOneRegistro(req, res) {
        if (req) {
            const { id } = req.params
            Registros.collection.findOne({})
                .then(results => {
                    res.writeHead(200, { 'Content-Type': 'application/json' })
                    res.end(JSON.stringify(results))
                })
                .catch(err => console.log(err))
        }
    }

}

const registrosController = new RegistrosController()
module.exports = { registrosController }