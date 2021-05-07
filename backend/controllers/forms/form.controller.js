const Form = require("../../models/forms/form");
const fs = require("fs");
const factory = require("../handlerFactory");

exports.getForms = async (req, res, next) => {
  try {
    let query = Form.find({}).sort("-creation");
    const doc = await query;
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        data: doc,
      },
    });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.postForm = async (req, res) => {
  try {
    const { formNo, subject, link } = req.body;
    const path = req.file ? req.file.filename : link;
    const format = req.file ? "PDF" : "Link";
    const newForm = new Form({ formNo, subject, path, format });
    const form = await newForm.save();

    if (form) return res.status(200).json({ status: "Success", data: form });
    else res.status(424).json({ status: "Failed", message: "Invalid Data" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.editForm = async (req, res) => {
  try {
    const { formNo, subject, link } = req.body;
    const path = req.file ? req.file.filename : link;
    const format = req.file ? "PDF" : "Link";
    let data;
    if (!req.file && !link) {
      data = { formNo, subject };
    } else {
      data = { formNo, subject, path, format };
      const id = req.params.id;
      const form = await Form.findById(id);
      if (form.path.indexOf("https://") == -1) {
        fs.unlinkSync(`${__dirname}/../../uploads/forms/${form.path}`);
      }
    }

    const form = await Form.findByIdAndUpdate(req.params.id, data);
    if (form) return res.status(200).json({ status: "Success", data: form });
    else res.status(424).json({ status: "Failed", message: "Invalid Data" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.getOneForm = async (req, res) => {
  try {
    const id = req.params.id;
    const form = await Form.findById(id);
    const filePath = `${__dirname}/../../uploads/forms/` + form.path;
    fs.readFile(filePath, (err, data) => {
      res.contentType("application/pdf");
      return res.send(data);
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteForm = async (req, res) => {
  try {
    const id = req.params.id;
    const form = await Form.findById(id);

    if (form.path.indexOf("https://") == -1) {
      fs.unlinkSync(`${__dirname}/../../uploads/forms/${form.path}`);
      console.log("successfully deleted /tmp/hello");
    }
    await Form.findByIdAndRemove(id);
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
