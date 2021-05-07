const mongoose = require("mongoose");

const ScholarshipPdfSchema = new mongoose.Schema({
  path: { type: String, required: true },
  creation: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ScholarshipPdf", ScholarshipPdfSchema);
