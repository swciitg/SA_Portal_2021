const mongoose = require("mongoose");

const RuleSchema = new mongoose.Schema(
  {
    path: { type: String, required: true },
    format: { type: String, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Rule", RuleSchema);
