const User = require('../models/userModel');
const WorkoutLog = require('../models/workoutLogModel');
const Goal = require('../models/goalModel');
const FitnessProgram = require('../models/fitnessProgramModel');

// Get all users
module.exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
};

// Delete a user
module.exports.deleteUser = async (req, res) => {
    const userId = req.params.id;

    try {
        await User.findByIdAndDelete(userId);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting user' });
    }
};

// Admin aggregate workout statistics (across all users)
module.exports.getAllUserStats = async (req, res) => {
    try {
        const totalWorkouts = await WorkoutLog.countDocuments();
        const totalGoals = await Goal.countDocuments();
        const completedGoals = await Goal.countDocuments({ achieved: true });

        res.json({ totalWorkouts, totalGoals, completedGoals });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching statistics' });
    }
};

// Create a new fitness program
module.exports.createFitnessProgram = async (req, res) => {
    const { title, description, duration, exercises } = req.body;

    try {
        const program = new FitnessProgram({ title, description, duration, exercises });
        await program.save();
        res.status(201).json(program);
    } catch (error) {
        res.status(500).json({ error: 'Error creating fitness program' });
    }
};

// Get all fitness programs
module.exports.getFitnessPrograms = async (req, res) => {
    try {
        const programs = await FitnessProgram.find({});
        res.json(programs);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching fitness programs' });
    }
};
