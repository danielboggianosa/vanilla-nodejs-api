// require('dotenv').config()
const { MongoClient } = require('mongodb');

class Database {
    uri = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@" + process.env.DB_CLUS + "/" + process.env.DB_NAME + "?retryWrites=true&w=majority";
    client = new MongoClient(this.uri, { useNewUrlParser: true, useUnifiedTopology: true });

    async testConnection() {
        await this.client.connect((err) => {
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
}

const database = new Database()
module.exports = { database }