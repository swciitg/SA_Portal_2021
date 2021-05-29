const Navigation = require("../../models/home/navigation");
const fs = require("fs");
const path = require("path");

exports.createNavigation = async (req, res) => {
  const {
    boardName,
    description,
    chairmanName,
    notices,
    events,
    announcements,
  } = req.body;

  console.log("[request body]");
  console.log(req.body);

  if (req.body && req.file.filename) {
    try {
      const path = req.file.filename;
      const newNavigation = await Navigation.create({
        boardName,
        description,
        chairmanName,
        notices,
        events,
        announcements,
        path,
      });

      /**
       * Console.log is for testing
       */
      console.log("[Success, navigation created successfully]");
      return res.status(200).json({ status: "Success", data: newNavigation });
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

exports.getAllNavigations = async (req, res) => {
  try {
    const navigations = await Navigation.find({}).sort("-updatedAt");
    /**
     *All console logs are for api testing
     */
    console.log("[Success, getting all navigations...]");
    return res.status(200).json({ status: "Success", data: navigations });
  } catch (err) {
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.getNavigationImage = async (req, res) => {
  try {
    let { id } = req.params;
    const image = await Navigation.findById(id);
    if (image) {
      const filePath = `${__dirname}/../../uploads/navigation/` + image.path;
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

exports.findNavigation = async (req, res) => {
  try {
    const { boardName } = req.body;

    const navigation = await Navigation.find({
      boardName,
    }).sort("-updatedAt");

    res.status(200).json({
      status: "Success",
      data: navigation,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteNavigation = async (req, res) => {
  const { id } = req.params;

  try {
    const image = await Navigation.findById(id);
    fs.unlinkSync(
      path.resolve(`${__dirname}/../../uploads/navigation/${image.path}`)
    );
    await Navigation.findByIdAndDelete({ _id: id });
    return res
      .status(200)
      .json({ status: "Success", message: "Successfully deleted navigation" });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.updateNavigation = async (req, res) => {
  const { id } = req.params;
  console.log("[ID ]", id);

  try {
    const {
      boardName,
      description,
      chairmanName,
      notices,
      events,
      announcements,
    } = req.body;

    if (req.body && req.file.filename) {
      const imgPath = req.file.filename;
      const oldImage = await Navigation.findById(id);
      if (oldImage) {
        fs.unlinkSync(
          path.resolve(`${__dirname}/../../uploads/navigation/${oldImage.path}`)
        );

        const updatedNavigation = await Navigation.findByIdAndUpdate(
          { _id: id },
          {
            boardName,
            description,
            chairmanName,
            notices,
            events,
            announcements,
            path: imgPath,
          },
          { new: true }
        );

        return res
          .status(200)
          .json({ status: "Success", data: updatedNavigation });
      }
    }
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }

  res.status(424).json({ status: "Failed", message: "Bad request" });
};
