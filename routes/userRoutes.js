const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const { createWorkoutLog, getWorkoutLogs } = require('../controllers/workoutController');
const verifyToken = require('../config/auth');

const router = express.Router();

// User Authentication
router.post('/register', registerUser);
router.post('/login', loginUser);

// Workout Logs
router.post('/workouts', verifyToken, createWorkoutLog);
router.get('/workouts', verifyToken, getWorkoutLogs);

module.exports = router;
