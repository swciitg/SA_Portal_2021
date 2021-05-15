const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    path: { type: String, required: true },
    format: { type: String, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", CourseSchema);
