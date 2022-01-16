const Sequelize = require('sequelize');
const StatModel = require('../model/stats');

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE,
    port: process.env.DB_PORT
});

const Stat = StatModel(sequelize, Sequelize);

sequelize.sync();

module.exports = {
    Stat,
    sequelize
};