const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema(
  {
    path: {
      type: String,
      unique: [true, "File path is not unique"],
      required: [true, "Path not specified"],
    },
    img_height:{
      type:Number,
    },
    img_width:{
      type:Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gallery", GallerySchema);
