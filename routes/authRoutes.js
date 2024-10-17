const express = require('express');
const { signup, forgotPassword, resetPassword, login } = require('../controllers/authController'); // Import all controllers
const router = express.Router();

// Define routes
router.post('/signup', signup); // Signup route
router.post('/login', login); // Login route
router.post('/forgot-password', forgotPassword); // Forgot password route
router.post('/reset-password/:token', resetPassword); // Reset password route

module.exports = router;

