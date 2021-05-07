const Rule = require("../../models/rules/rule");
const fs = require("fs");

exports.getRules = async (req, res) => {
  try {
    let query = Rule.find({}).sort("-updatedAt");
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

exports.postRule = async (req, res) => {
  try {
    const { link } = req.body;
    const path = req.file ? req.file.filename : link;
    const format = req.file ? "PDF" : "Link";
    const newRule = new Rule({ path, format });
    const rule = await newRule.save();

    if (rule) return res.status(200).json({ status: "Success", data: rule });
    else res.status(424).json({ status: "Failed", message: "Invalid Data" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.editRule = async (req, res) => {
  try {
    const { link } = req.body;
    const path = req.file ? req.file.filename : link;
    const format = req.file ? "PDF" : "Link";
    const data = { path, format };
    const { id } = req.params;

    const oldRule = await Rule.findById(id);
    if (oldRule.path.indexOf("https://") == -1) {
      fs.unlinkSync(`${__dirname}/../../uploads/forms/${oldRule.path}`);
    }

    const rule = await Rule.findByIdAndUpdate(id, data);
    if (rule) return res.status(200).json({ status: "Success", data: rule });
    else res.status(424).json({ status: "Failed", message: "Invalid Data" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.getOneRule = async (req, res) => {
  try {
    const { id } = req.params;
    const rule = await Rule.findById(id);
    if (rule.path.indexOf("https://") == -1) {
      const filePath = `${__dirname}/../../uploads/rules/` + rule.path;
      fs.readFile(filePath, (err, data) => {
        res.contentType("application/pdf");
        return res.send(data);
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteRule = async (req, res) => {
  try {
    const { id } = req.params;
    const rule = await Rule.findById(id);

    if (rule.path.indexOf("https://") == -1) {
      fs.unlinkSync(`${__dirname}/../../uploads/rules/${rule.path}`);
      console.log("successfully deleted file");
    }
    await Rule.findByIdAndRemove(id);
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
