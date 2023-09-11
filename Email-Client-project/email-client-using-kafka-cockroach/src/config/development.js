const fs = require('fs')
const config = {
    development: {
        host: '127.0.0.1',
        port: 26257,
        database: 'email_client',
        username: 'root',
        password: 'root',
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                ca: fs.readFileSync('/home/ad.rapidops.com/mugish.beldar/certs/ca.crt').toString(),
                key: fs.readFileSync('/home/ad.rapidops.com/mugish.beldar/certs/client.root.key').toString(),
                cert: fs.readFileSync('/home/ad.rapidops.com/mugish.beldar/certs/client.root.crt').toString()
            }
        }
    },
    kafka: {
        host: '127.0.0.1',
        port: 9092,
    },
}
module.exports = { config };