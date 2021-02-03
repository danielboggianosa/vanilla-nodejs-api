const { database } = require('../database/database')

class RegistrosModel {

    collection

    constructor() {
        this.connect()
    }

    async connect() {
        this.collection = await database.getCollection('registros')
        return
    }
}

const Registros = new RegistrosModel()
module.exports = { Registros }