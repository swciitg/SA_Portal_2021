const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  formNo: { type: String, required: true },
  subject: { type: String, required: true },
  path: { type: String, required: true },
  creation: { type: Date, default: Date.now },
  format: { type: String, required: true },
});

module.exports = mongoose.model("Form", FormSchema);
