// const mysql = require("mysql2");
// const CONFIG = require("./config/config.json");

const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "emailClient",
  connectionLimit: 10, // limit of connections in the pool
});

module.exports = pool;
