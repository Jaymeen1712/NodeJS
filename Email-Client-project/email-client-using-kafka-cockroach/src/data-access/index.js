const development = require("../config/development");
const { Pool } = require('pg');

const cockroach = new Pool({
    user: development.config.development.username,
    host: development.config.development.host,
    database: development.config.development.database,
    password: development.config.development.password,
    port: development.config.development.port,
    ssl: development.config.development.dialectOptions.ssl
});

const userDbFunctions = require("./crud-operation")
const dataAccessUserFunction = userDbFunctions({ cockroach })

const lableFunctions = require("./lable-table")
const dataAccessLableFunction = lableFunctions({ cockroach });

module.exports = { dataAccessUserFunction ,dataAccessLableFunction, cockroach };