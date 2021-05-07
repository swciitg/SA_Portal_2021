const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    title: {
      type: String,
      unique: [true, "Event Name is not unique"],
      required: [true, "A event must have a name"],
    },
    author: { type: String, required: [true, "Author not specified"] },
    category: {
      type: String,
      required: [true, "A event must have a category"],
    },
    // topics: {
    //   type: [String],
    //   enum: ["iitg.ai", "iitgracing"], //we'll decide them I don't know tags are there in events
    // },
    // description: { type: String, required: true }, once design is complete we'll do this
    imgPath: {
      type: String,
      required: [true, "A thumbnail image path is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
