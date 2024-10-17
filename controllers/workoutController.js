const WorkoutLog = require('../models/workoutLogModel');

// Log a workout
module.exports.createWorkoutLog = async (req, res) => {
    const { activity, duration } = req.body;
    const userId = req.user.id;

    try {
        const log = new WorkoutLog({ user: userId, activity, duration });
        await log.save();
        res.status(201).json(log);
    } catch (error) {
        res.status(400).json({ error: 'Error logging workout' });
    }
};

// Get user's workout logs
module.exports.getWorkoutLogs = async (req, res) => {
    const userId = req.user.id;

    try {
        const logs = await WorkoutLog.find({ user: userId });
        res.json(logs);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching workout logs' });
    }
};
