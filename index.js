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
        for (let r of this.registeredRoutes) {
            if (req.url.match(new RegExp(r.url + '.*'))) {
                r.router.route(r.url, req, res)
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
        this.registeredRoutes.push({ url: url, router: router })
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