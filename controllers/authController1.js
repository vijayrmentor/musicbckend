const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secretKey = 'your_secret_key';

// Register user
exports.register = async (req, res) => {
    const { username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, password: hashedPassword });
        res.status(201).json({ message: 'User registered successfully', user });
        console.log('Register:', register); // Should not be undefined
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

// Login user
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });
        res.json({ message: 'Login successful', token });
        console.log('Login:', login); // Should not be undefined
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};
