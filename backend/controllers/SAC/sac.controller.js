const Sac = require("../../models/SAC/sac");
const fs = require("fs");

exports.getSac = async (req, res) => {
  try {
    let query = Sac.find({}).sort("-updatedAt");
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

exports.postSac = async (req, res) => {
  try {
    const { name,link } = req.body;
    const path = req.file ? req.file.filename : link;
    const format = req.file ? "PDF" : "Link";
    const newSac = new Sac({ name, path, format });
    const sac = await newSac.save();

    if (sac) return res.status(200).json({ status: "Success", data: sac });
    else res.status(424).json({ status: "Failed", message: "Invalid Data" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.editSac = async (req, res) => {
  try {
    const { name, link } = req.body;
    const path = req.file ? req.file.filename : link;
    const format = req.file ? "PDF" : "Link";
    const data = { name, path, format };
    const { id } = req.params;

    const oldSac = await Sac.findById(id);
    if (oldSac.path.indexOf("https://") == -1) {
      fs.unlinkSync(`${__dirname}/../../uploads/Sac/${oldSac.path}`);
    }

    const sac = await Sac.findByIdAndUpdate(id, data);
    if (sac) return res.status(200).json({ status: "Success", data: sac });
    else res.status(424).json({ status: "Failed", message: "Invalid Data" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.getOneSac = async (req, res) => {
  try {
    const { id } = req.params;
    const sac = await Sac.findById(id);
    if (sac.path.indexOf("https://") == -1) {
      const filePath = `${__dirname}/../../uploads/Sac/` + sac.path;
      fs.readFile(filePath, (err, data) => {
        res.contentType("application/pdf");
        return res.send(data);
      });
    } else {
      return res.status(400).json({
        status: "Failed",
        message: "Bad request!",
      });
    }
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.deleteSac = async (req, res) => {
  try {
    const { id } = req.params;
    const sac = await Sac.findById(id);

    if (sac.path.indexOf("https://") == -1) {
      fs.unlinkSync(`${__dirname}/../../uploads/Sac/${sac.path}`);
      console.log("successfully deleted file");
    }
    await Sac.findByIdAndRemove(id);
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
