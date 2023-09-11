const config = require('./config/development');
const Sequelize = require('sequelize');
const { Umzug, SequelizeStorage } = require('umzug');

const ROOT_PATH = __dirname;

console.log("config.development.database+_+_+____",config.config.development.database);
const sequelize = new Sequelize(config.config.development.database, config.config.development.username, config.config.development.password, {
    dialect: config.config.development.dialect,
    port: config.config.development.port,
    host: config.config.development.host,
    dialectOptions: config.config.development.dialectOptions,
});

// await sequelize.authenticate();

const umzug = new Umzug({
    migrations: { glob: `${ROOT_PATH}/migrations-for-cockroach/*.js` },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
});

(async () => {
    await umzug.up();
})();
