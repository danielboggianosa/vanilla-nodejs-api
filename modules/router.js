const URL = require('url').URL
const StringDecoder = require('string_decoder').StringDecoder
require('dotenv').config()

class Router {
    registeredRoutes = []
    baseUrl = 'http://[::1]:' + process.env.PORT + '/api'

    constructor() {

    }

    use(url, callback) {
        const uri = new URL(url, this.baseUrl).pathname
        let trimmedPath = uri.replace(/^\/+|\/+$/g, '')
        this.registeredRoutes[trimmedPath] = callback
    }

    // Función privada
    route(req, res) {
        const { url } = req
        const method = req.method.toLowerCase()
        let path = new URL(url, this.baseUrl).pathname
        // let trimmedPath = path.replace(/^\/+|\/+$/g, '')
        let base = path.split('/')[1]

        if (this.registeredRoutes[base]) {
            this.findRoute(path, this.registeredRoutes[base].routes, method)
                .then((data) => {
                    req['params'] = data.params
                    let decoder = new StringDecoder('utf-8')
                    let body = ""
                    req.on('data', chuck => body += decoder.write(chuck))
                    req.on('end', () => {
                        decoder.end()
                        req.body = body
                        data.controller(req, res)
                    })
                })
                .catch((err) => {
                    res.writeHead(404, { 'Content-Type': 'application/json' })
                    res.end(JSON.stringify(err))
                })
        }
        else {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end()
        }
    }

    get(req, res) {

    }

    post(req, res) {

    }

    put(req, res) {

    }

    patch(req, res) {

    }

    delete(req, res) {

    }

    findRoute(reqPath, routes, method) {
        return new Promise((resolve, reject) => {
            let trimmedPath = reqPath.replace(/^\/+|\/+$/g, '')
            let reqPathArray = trimmedPath.split('/')
            let reqPathSplited = ""
            let params = {}

            for (let i = 1; i < reqPathArray.length; i++) {
                if (reqPathArray[i])
                    reqPathSplited += '/' + reqPathArray[i]
            }

            for (let i = 0; i < routes.length; i++) {
                let r = routes[i]
                let controller = r.controller
                if (r.method == method) {
                    if (reqPathSplited === r.path || (r.path == '/' && reqPathSplited == '')) {
                        resolve({ params, controller })
                    }
                    else {
                        let strPathArray = r.path.split('/')
                        if (strPathArray.length == reqPathArray.length) {
                            for (let j = 1; j < strPathArray.length; j++) {
                                if (strPathArray[j] == reqPathArray[j]) {
                                    if ((j + 1) == strPathArray.length)
                                        resolve({ params, controller })
                                    else
                                        continue
                                }
                                else if (strPathArray[j].split(':')[1]) {
                                    let variable = strPathArray[j].split(':')[1]
                                    params[variable] = reqPathArray[j]
                                    if ((j + 1) == strPathArray.length)
                                        resolve({ params, controller })
                                }
                                else
                                    break
                            }
                        }
                        continue
                    }
                }
                else {
                    continue
                }
            }
            reject({ mensaje: 'Ruta no encontrada' })

        })
    }
}
const router = new Router()
module.exports = { router }