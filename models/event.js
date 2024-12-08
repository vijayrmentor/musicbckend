const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Artist = require('./artist');
//vondyffd
const Event = sequelize.define('Event', {
    eventId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    eventName: { type: DataTypes.STRING, allowNull: false },
    eventDate: { type: DataTypes.DATE, allowNull: false },
    eventUrl: { type: DataTypes.STRING, allowNull: false },
    eventImage: { type: DataTypes.STRING, allowNull: true },
});

// Define the foreign key relationship
//Artist.hasMany(Event, { foreignKey: 'artistId' });
Event.belongsTo(Artist, { foreignKey: 'artistId' });

module.exports = Event;
