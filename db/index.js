const Sequelize = require('sequelize');

const db = new Sequelize('urbnb', 'ubuntu', 'sdcsdc', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  operatorsAliases: false,
});

module.exports = db;
