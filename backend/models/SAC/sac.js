const mongoose = require("mongoose");

const SacSchema = new mongoose.Schema(
  {
    name: { type:String, required:true},
    path: { type: String, required: true },
    format: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sac", SacSchema);
