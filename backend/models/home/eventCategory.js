const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: [true, "Category required"] },
});

module.exports = mongoose.model("EventCategory", CategorySchema);
