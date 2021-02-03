const { Registros } = require("../models/registros.model")

class Controller {
    async getIndex(req, res) {
        if (req) {
            await Registros.collection.findOne()
                .then(d => {
                    console.log(d)
                    res.writeHead(200, { 'Content-Type': 'application/json' })
                    res.end(JSON.stringify(d))
                })
                .catch(e => {
                    console.log(e)
                    res.writeHead(403, { 'Content-Type': 'application/json' })
                    res.end()
                })
        }
    }
    async postIndex(req, res) {
        if (req) {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ msg: 'Bienvenido al index POST' }))
        }
    }
    async putIndex(req, res) {
        if (req) {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ msg: 'Bienvenido al index PUT' }))
        }
    }
    async deleteIndex(req, res) {
        if (req) {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ msg: 'Bienvenido al index DELTE' }))
        }
    }

}

const indexController = new Controller();

module.exports = { indexController }