const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema(
  {
    path: {
      type: String,
      unique: [true, "File path is not unique"],
      required: [true, "Path not specified"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gallery", GallerySchema);
