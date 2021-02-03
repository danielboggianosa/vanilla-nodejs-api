// require('dotenv').config()
const { MongoClient } = require('mongodb');

class Database {
    uri = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@" + process.env.DB_CLUS + "/" + process.env.DB_NAME + "?retryWrites=true&w=majority";
    client = new MongoClient(this.uri, { useNewUrlParser: true, useUnifiedTopology: true });

    async testConnection() {
        await this.client.connect((err, db) => {
            if (err) {
                console.log("No se puedo conectar")
                this.client.close();
                throw err
            }
            else
                console.log("Conexión exitosa con la base de datos");
        });
        this.client.close()
    }

    async createCollection(collectionName) {
        const dbo = await this.client.connect((err, db) => {
            if (err) throw err
            const dbo = db.db(process.env.DB_NAME).createCollection(collectionName, (err, res) => {
                if (err) throw err;
                console.log("Collección " + collectionName + " creada");
                db.close();
            })
        })
    }

    async getCollection(collectionName) {
        await this.client.connect();
        const _collection = this.client.db(process.env.DB_NAME).collection(collectionName)
        return _collection
    }
}

const database = new Database()
module.exports = { database }