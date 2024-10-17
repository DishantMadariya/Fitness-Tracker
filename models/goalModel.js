const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    goal: {
        type: String,
        required: true
    },
    targetDate: {
        type: Date,
        required: true
    },
    achieved: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model('Goal', goalSchema);