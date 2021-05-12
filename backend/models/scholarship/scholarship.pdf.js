const mongoose = require("mongoose");

const ScholarshipPdfSchema = new mongoose.Schema({
  name: {type : String, required: true},
  path: { type: String, required: true },
  creation: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ScholarshipPdf", ScholarshipPdfSchema);
