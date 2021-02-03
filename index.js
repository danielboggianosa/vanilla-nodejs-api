require('dotenv').config()
const http = require('http');
const { indexRoutes } = require('./routes/indexRoutes.js');
const { database } = require('./database/database')

class Server {
    PORT = process.env.PORT || 5000
    server;
    registeredRoutes = []

    constructor() {
        this.routes()
        this.database()
    }

    /**
     * Esta función sirve para agregar las rutas principales. Debes usar la función "this.use" y pasarle los parámetros URL (String) y ROUTER (Archivo de rutas)
     */
    routes() {
        this.use('/api', indexRoutes)
    }

    // Función privada
    router(req, res) {
        let found = true
        let method = req.method
        for (let r of this.registeredRoutes) {
            if (req.url.match(new RegExp(r.url + '.*'))) {
                for (let rr of r.router.registeredRoutes) {
                    if (req.url.match(new RegExp(r.url + rr.url + '$')) && method == rr.method) {
                        rr.controller(req, res)
                        break;
                    }
                    else
                        found = false
                }
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

    // Función privada
    use(url, router) {
        this.registeredRoutes.push({ url, router })
    }

    // Función privada
    start() {
        this.server = http.createServer((req, res) => { if (req) this.router(req, res) })
        this.server.listen(this.PORT, () => {
            console.log("Servidor en el puerto " + this.PORT)
        })
    }

    async database() {
        database.testConnection()
    }


}
const server = new Server();
server.start()