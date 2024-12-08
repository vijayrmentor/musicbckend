const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Artist = sequelize.define('Artist', {
    artistId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contactNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    brandPerformance: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sponsor: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

module.exports = Artist;
