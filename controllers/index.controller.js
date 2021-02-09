const { Registros } = require("../models/registros.model")

class Controller {
    async getIndex(req, res) {
        if (req) {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ msg: 'Bienvenido al index GET' }))
        }
    }
    async getIdIndex(req, res) {
        if (req) {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ msg: 'Bienvenido al index Con ID ' + req.query.id }))
        }
    }
    async getDaIndex(req, res) {
        if (req) {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ msg: 'Bienvenido al index GET DADO' }))
        }
    }
    async postIndex(req, res) {
        if (req) {
            console.log(req.body)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ msg: 'Bienvenido al index POST' }))
        }
    }
    async putIndex(req, res) {
        if (req) {
            console.log(req.body, req.params)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ msg: 'Bienvenido al index PUT' }))
        }
    }
    async patchIndex(req, res) {
        if (req) {
            console.log(req.body, req.params)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ msg: 'Bienvenido al index PATCH' }))
        }
    }
    async deleteIndex(req, res) {
        if (req) {
            console.log(req.params)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ msg: 'Bienvenido al index DELTE' }))
        }
    }

}

const indexController = new Controller();

module.exports = { indexController }