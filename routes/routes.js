const { threadId } = require("worker_threads")


class Route {

    registeredRoutes = []

    use(url, router) {
        this.registeredRoutes.push({ url: url, router: router })
    }

    route(req, res) {
        let found = true
        for (let r of this.registeredRoutes) {
            if (req.url.match(new RegExp(r.url))) {
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


}
const routes = new Route()

/* const routes = (req, res) => {
    switch (req.method) {
        case 'GET': {
            route.get(req, res);
            break;
        }
        case 'POST': {
            route.post(req, res);
            break;
        }
        case 'PUT': {
            route.put(req, res);
            break;
        }
        case 'DELETE': {
            route.delete(req, res);
            break;
        }
    }
}; */

module.exports = { routes };