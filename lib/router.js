const URL = require('url').URL
const StringDecoder = require('string_decoder').StringDecoder
require('dotenv').config()

class Router {
    _routes = []
    _baseUrl = 'http://[::1]:' + process.env.PORT

    constructor() {

    }

    use(url, callback) {
        const uri = new URL(url, this._baseUrl).pathname
        let trimmedPath = uri.replace(/^\/+|\/+$/g, '')
        this._routes[trimmedPath] = callback.routes
    }

    // Función privada
    route(req, res) {
        const { url } = req
        const method = req.method.toLowerCase()
        const uri = new URL(url, this._baseUrl)
        const path = uri.pathname
        const base = path.split('/')[1]
        const pathname = path.split(base)[1]

        if (this._routes[base]) {
            let _route = this._routes[base]
            let body = ""
            let params = {}
            let query = {}

            // Get all paramas from url
            for (const name of uri.searchParams.keys()) {
                params[name] = uri.searchParams.get(name)
            }

            req.on('data', chunk => body += chunk)
            req.on('end', () => {
                req.body = body
                req.params = params
                req.query = query
                if (_route[pathname] && _route[pathname][method])
                    _route[pathname][method](req, res)
                else {
                    res.writeHead(404, { 'Content-Type': 'application/json' })
                    res.end()
                }
            })
        }
        else {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end()
        }
    }
}
const router = new Router()
module.exports = { router }