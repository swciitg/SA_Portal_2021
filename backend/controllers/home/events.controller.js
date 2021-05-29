const fs = require("fs");
const Event = require("../../models/home/event");
const Category = require("../../models/home/eventCategory");
const dirname = require("../../dirname");
const factory = require("../handlerFactory");

/**
 *
 * for creating events the body of the request should be-
 * title, evnetDate, topics imgPath
 */

exports.createEvent = async (req, res) => {
  const { title, eventDate } = req.body;
  let { category } = req.body;
  category = category.toLowerCase();
  console.log("[request body]");
  console.log(req.body);
  const imgPath = "/assets/events/thumbnails/" + req.file.filename;
  if (req.body && req.file.filename) {
    try {
      const newEvent = await Event.create({
        title,
        eventDate,
        imgPath,
        category,
      });

      const savedCategory = await Category.find({ name: category });
      if (savedCategory.length == 0) {
        const newCategory = new Category({ name: category });
        await newCategory.save();
      }

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
    const events = await Event.find({}).sort("-eventDate");
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

exports.getOneImage = async (req, res) => {
  try {
    let { id } = req.params;
    const image = await Event.findById(id);
    if (image) {
      const filePath = dirname.dirpath + image.imgPath;
      fs.readFile(filePath, (err, data) => {
        res.contentType("image/jpeg");
        return res.send(data);
      });
    } else {
      return res
        .status(400)
        .json({ status: "Failed", message: "Bad request!" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.findEvent = async (req, res) => {
  try {
    const { category } = req.body;
    console.log("[Category ]", req.body);

    const events = await Event.find({
      category: category,
    }).sort("-eventDate");
    const categories = await Category.find({});

    res.status(200).json({
      status: "Success",
      data: {
        events,
        categories,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    await Event.findByIdAndDelete({ _id: id });
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
  console.log("[ID ]", id);

  try {
    const { title, eventDate, category } = req.body;
    const imgPath = "/assets/events/thumbnails/" + req.file.filename;

    if (req.body && req.file.filename) {
      const updatedEvent = await Event.findByIdAndUpdate(
        { _id: id },
        { title, eventDate, category, imgPath },
        { new: true }
      );

      const savedCategory = await Category.find({ name: category });
      if (savedCategory.length == 0) {
        const newCategory = new Category({ name: category });
        await newCategory.save();
      }

      return res.status(200).json({ status: "Success", data: updatedEvent });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.getCategories = factory.getAll(Category);
