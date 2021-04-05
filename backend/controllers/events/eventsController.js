const Event = require("../../models/events/event");

/**
 *
 * for creating events the body of the request should be-
 * title, author, topics imgPath
 */

exports.createEvent = async (req, res) => {
  const { title, author, topics, imgPath, date } = req.body;

  if (req.body) {
    try {
      const newEvent = await Event.create({
        title,
        author,
        imgPath,
        topics,
        date,
      });

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
