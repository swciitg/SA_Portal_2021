const mongoose = require("mongoose");

const AchievementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  published: { type: String, required: true },
  author: { type: String, required: true },
  link: { type: String, required: true },
});

module.exports = mongoose.model("Achievement", AchievementSchema);


