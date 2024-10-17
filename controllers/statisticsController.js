const WorkoutLog = require('../models/workoutLogModel');
const Goal = require('../models/goalModel');

// Get workout statistics by date range and activity type
module.exports.getWorkoutStats = async (req, res) => {
    const { startDate, endDate, activityType } = req.query;
    const userId = req.user.id;

    try {
        const filter = { user: userId, date: { $gte: new Date(startDate), $lte: new Date(endDate) } };
        if (activityType) filter.activity = activityType;

        const logs = await WorkoutLog.find(filter);
        
        // Example statistics generation (customize as needed)
        const totalDuration = logs.reduce((acc, log) => acc + log.duration, 0);
        const totalWorkouts = logs.length;

        res.json({ totalDuration, totalWorkouts, logs });
    } catch (error) {
        res.status(500).json({ error: 'Error generating workout statistics' });
    }
};

// Get goal achievement statistics
module.exports.getGoalStats = async (req, res) => {
    const userId = req.user.id;

    try {
        const goals = await Goal.find({ user: userId });

        const totalGoals = goals.length;
        const completedGoals = goals.filter(goal => goal.achieved).length;
        const goalCompletionRate = (completedGoals / totalGoals) * 100;

        res.json({ totalGoals, completedGoals, goalCompletionRate });
    } catch (error) {
        res.status(500).json({ error: 'Error generating goal statistics' });
    }
};
