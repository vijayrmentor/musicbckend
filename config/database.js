const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('musicapp', 'root', 'W7301@jqr#', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
