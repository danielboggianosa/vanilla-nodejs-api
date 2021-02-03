
class Controller {
    getIndex(req, res) {
        if (req) {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ msg: 'Bienvenido al index GET' }))
        }
    }
    postIndex(req, res) {
        if (req) {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ msg: 'Bienvenido al index POST' }))
        }
    }
    putIndex(req, res) {
        if (req) {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ msg: 'Bienvenido al index PUT' }))
        }
    }
    deleteIndex(req, res) {
        if (req) {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ msg: 'Bienvenido al index DELTE' }))
        }
    }

}

const indexController = new Controller();

module.exports = {
    indexController
}