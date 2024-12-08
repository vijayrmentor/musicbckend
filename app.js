const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const artistRoutes = require('./routes/artistRoutes');
const eventRoutes = require('./routes/eventRoutes');
//const Artist = require('./models/artist');
const sequelize = require('./config/database');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/artists', artistRoutes);

//app.use('/uploads', express.static('uploads'));
//app.use('/api/events', eventRoutes);

sequelize.authenticate()
    .then(() => console.log('Connected to database'))
    .catch(err => console.error('Unable to connect to database:', err));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
