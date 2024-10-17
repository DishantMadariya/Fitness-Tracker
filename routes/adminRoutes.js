const express = require('express');
const { getAllUsers, deleteUser, getAllUserStats, createFitnessProgram, getFitnessPrograms } = require('../controllers/adminController');
const verifyToken = require('../config/auth');
const { checkAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

// Middleware to check if the user is admin
router.use(verifyToken, checkAdmin);

// User Management
router.get('/users', getAllUsers);      // Admin can get all users
router.delete('/users/:id', deleteUser); // Admin can delete a user

// Statistics
router.get('/stats', getAllUserStats);   // Admin can view overall workout & goal statistics

// Fitness Programs
router.post('/programs', createFitnessProgram); // Admin can create a new fitness program
router.get('/programs', getFitnessPrograms);    // Admin can view all fitness programs

module.exports = router;
