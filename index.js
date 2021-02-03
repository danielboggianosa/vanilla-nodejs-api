require('dotenv').config()
const http = require('http');
const { indexRoutes } = require('./routes/indexRoutes.js');

class Server {
    PORT = process.env.PORT || 5000
    server;
    registeredRoutes = []

    constructor() {
        this.config()
    }

    config() {
        this.use('/api', indexRoutes)
    }

    routes(req, res) {
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

    use(url, router) {
        this.registeredRoutes.push({ url, router })
    }

    start() {
        this.server = http.createServer((req, res) => { if (req) this.routes(req, res) })
        this.server.listen(this.PORT, () => {
            console.log("Servidor en el puerto " + this.PORT)
        })
    }


}
const server = new Server();
server.start()