const express = require('express');
//const { register, login ,updateUser} = require('../controllers/authController1');
const { register, login, updateUser, deleteUser, getAllUsers, getUserById  } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.put('/update/:id', updateUser); // Update user by ID
router.delete('/delete/:id', deleteUser); // Delete user by ID
router.get('/users', getAllUsers); // Get all users
router.get('/users/:id', getUserById); // Get user by ID
module.exports = router;
