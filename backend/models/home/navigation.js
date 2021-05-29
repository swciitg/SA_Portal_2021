const mongoose = require("mongoose");

const NavigationSchema = new mongoose.Schema(
  {
    path: {
      type: String,
      unique: [true, "File path is not unique"],
      required: [true, "Path not specified"],
    },
    chairmanName: { type: String, required: [true, "Name is require"] },
    boardName: {
      type: String,
      required: [true, "Board Name is required"],
      enum: [
        "HOSTEL AFFAIRS BOARD",
        "TECHNICAL BOARD",
        "CULTURAL BOARD",
        "WELFARE BOARD",
        "SPORTS BOARD",
      ],
    },
    description: { type: String, required: true },
    notices: { type: String, required: true },
    events: { type: String, required: true },
    announcements: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Navigation", NavigationSchema);
