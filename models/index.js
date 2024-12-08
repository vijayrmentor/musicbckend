const sequelize = require('../config/database');
const User = require('./user');
const Artist=require('./artist');
const Event = require('./event');
sequelize.sync()
    .then(() => console.log('Database synchronized'))
    .catch(err => console.log('Error syncing database:', err));

module.exports = {
    User,Artist
};
