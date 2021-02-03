const { indexController } = require('../controllers/indexController')

class IndexRoutes {
    registeredRoutes = [
        { method: 'GET', url: '/', controller: indexController.getIndex },
        { method: 'POST', url: '/', controller: indexController.postIndex },
        { method: 'PUT', url: '/', controller: indexController.putIndex },
        { method: 'DELETE', url: '/', controller: indexController.deleteIndex },
    ]

    route(url, req, res) {
        let found = true
        let method = req.method
        for (let r of this.registeredRoutes) {
            if (req.url.match(new RegExp(url + r.url + '$')) && method == r.method) {
                r.controller(req, res)
                break;
            }
            else
                found = false
        }
        if (!found) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end()
        }
    }
}
const indexRoutes = new IndexRoutes()
module.exports = {
    indexRoutes
}