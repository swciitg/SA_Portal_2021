const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  role: { type: String, required: true, default: "NA" },
  accessToken: { type: String, required: true },
  contact: { type: Number, length: 10 },
});

module.exports = mongoose.model("User", UserSchema);
