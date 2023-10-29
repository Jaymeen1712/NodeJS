const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define the route for creating a user
router.post('/addUser', userController.createUser);

module.exports = router;
