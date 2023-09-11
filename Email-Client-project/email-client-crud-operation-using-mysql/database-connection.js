const mysql = require("mysql2");
const config = require("./config/config.json");

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "client_mail",
});
module.exports = con;
