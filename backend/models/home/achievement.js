const mongoose = require("mongoose");

const AchievementSchema = mongoose.Schema({
    HTMLString: {
        type: String,
        required: true
    },
    creation: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Achievement",AchievementSchema);
