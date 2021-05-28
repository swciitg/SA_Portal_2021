const Gallery = require("../../models/home/gallery");
const fs = require("fs");
const { mime } = require("../../utils/mime");
const mongoose = require("mongoose");
const path = require("path");

exports.getImages = async (req, res) => {
  try {
    let query = Gallery.find({}).sort("-updatedAt");
    const doc = await query;
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: doc,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.postImage = async (req, res) => {
  try {
    const path = req.file.filename;
    const newImage = new Gallery({ path });
    const image = await newImage.save();

    if (image) return res.status(200).json({ status: "Success", data: image });
    else res.status(424).json({ status: "Failed", message: "Invalid Data" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.editImage = async (req, res) => {
  try {
    const path = req.file.filename;
    const data = { path };
    let { id } = req.params;

    const oldImage = await Gallery.findById(id);
    fs.unlinkSync(`${__dirname}/../../uploads/gallery/${oldImage.path}`);

    const image = await Gallery.findByIdAndUpdate(id, data);
    if (image) return res.status(200).json({ status: "Success", data: image });
    else res.status(424).json({ status: "Failed", message: "Invalid Data" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.getOneImage = async (req, res) => {
  try {
    let { id } = req.params;
    const image = await Gallery.findById(id);
    if (image) {
      const filePath = `${__dirname}/../../uploads/gallery/` + image.path;
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

exports.deleteImage = async (req, res) => {
  try {
    let { id } = req.params;
    const image = await Gallery.findById(id);
    fs.unlinkSync(
      path.resolve(`${__dirname}/../../uploads/gallery/${image.path}`)
    );
    console.log("successfully deleted file");
    await Gallery.findByIdAndRemove(id);
    return res.status(200).json({ status: "Success" });
  } catch (err) {
    // handle the error
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

const compare = (a, b) => {
  return b.creation - a.creation;
};
