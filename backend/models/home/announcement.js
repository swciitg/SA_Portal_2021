const mongoose = require("mongoose");

const AnnouncementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  descrition: { type: String, required: true },
  link: { type: String },
  important: { type: Boolean, required: true },
  creation: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Announcement", AnnouncementSchema);
