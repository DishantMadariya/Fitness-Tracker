const express = require('express');
const { getWorkoutStats, getGoalStats } = require('../controllers/statisticsController');
const verifyToken = require('../config/auth');

const router = express.Router();

// Statistics Endpoints
router.get('/workout-stats', verifyToken, getWorkoutStats);
router.get('/goal-stats', verifyToken, getGoalStats);

module.exports = router;
