const http = require('http');
const { indexRoutes } = require('./routes/index.routes.js');
const { router } = require('./lib/router')

class Server {
    PORT = process.env.PORT || 5000
    server;
    registeredRoutes = []

    constructor() {
        this.routes()
    }

    /**
     * Esta función sirve para agregar las rutas principales. Debes usar la función "router.use" y pasarle los parámetros URL (String) y ROUTER (Método contenedor de subrutas)
     */
    routes() {
        router.use('/api', indexRoutes)
    }


    // Función privada
    start() {
        this.server = http.createServer((request, response) => {
            if (request) router.route(request, response)
        })
        this.server.listen(this.PORT, () => {
            console.log("Servidor en el puerto " + this.PORT)
        })
    }


}
const server = new Server();
server.start()