const Event = require("../../models/home/event");
const dirname = require("../../dirname");

/**
 *
 * for creating events the body of the request should be-
 * title, author, topics imgPath
 */

exports.createEvent = async (req, res) => {
  const { title, author, topics } = req.body;
  console.log("[request body]");
  console.log(req.body);
  const imgPath =
    dirname.dirpath + "/assets/events/thumbnails/" + req.file.filename;
  if (req.body && imgPath) {
    try {
      const newEvent = await Event.create({
        title,
        author,
        imgPath,
        topics,
      });
      /**
       * Console.log is for testing
       */
      console.log("[Success, event created successfully]");
      return res.status(200).json({ status: "Success", data: newEvent });
    } catch (err) {
      console.log(err);
      return res
        .status(424)
        .json({ status: "Failed", message: "Request failed" });
    }
  }

  res
    .status(422)
    .json({ status: "Insufficient Data", message: "Data is insufficient" });
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({}).sort("-date");
    /**
     *All console logs are for api testing
     */
    console.log("[Success, getting all events...]");
    return res.status(200).json({ status: "Success", data: events });
  } catch (err) {
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.deleteEvent = async (req, res) => {
  const { id } = req.params.id;

  try {
    await Event.findByIdAndDelete({ id });
    return res
      .status(200)
      .json({ status: "Success", message: "Successfully deleted event" });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.updateEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const { title, author, topics, imgPath, date } = req.body;

    const updatedEvent = await Event.findByIdAndUpdate(
      { id },
      { title, author, topics, imgPath, date },
      { new: true }
    );
    return res.status(200).json({ status: "Success", data: updatedEvent });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};
