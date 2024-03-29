const ScholarshipPdf = require("../../models/scholarship/scholarship.pdf");
const SchlolershipEditor = require("../../models/scholarship/scholarship.editor");
const fs = require("fs");

exports.getScholarshipEditorData = async (req, res) => {
  try {
    const EditorData = await SchlolershipEditor.findOne({});
    return res.status(200).json({ status: "Success", data: EditorData });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.getScholarshipPdfData = async (req, res) => {
  try {
    const doc = await ScholarshipPdf.find({}).sort("-creation");
    return res
      .status(200)
      .json({ status: "Success", results: doc.length, data: doc });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.getOneScholarshipPdf = async (req, res) => {
  try {
    const { id } = req.params;
    const Pdf = await ScholarshipPdf.findById(id);
    if (Pdf) {
      const PdfPath = `${__dirname}/../../uploads/scholarship/${Pdf.path}`;
      fs.readFile(PdfPath, (err, data) => {
        res.contentType("application/pdf");
        return res.send(data);
      });
    } else {
      return res
        .status(424)
        .json({ status: "Failed", message: "Request failed" });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.getScholarshipData = async (req, res) => {
  try {
    const EditorData = await SchlolershipEditor.find({});
    const doc = await ScholarshipPdf.find({}).sort("-creation");
    return res.status(200).json({
      status: "Success",
      Pdfs: { results: doc.length, data: EditorData },
      Editor: { data: EditorData },
    });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.postScholarshipEditor = async (req, res) => {
  try {
    await SchlolershipEditor.deleteMany({});
    const { HTMLString } = req.body;
    const newEditorData = new SchlolershipEditor({ HTMLString });
    const EditorData = await newEditorData.save();
    return res.status(200).json({ status: "Success", data: EditorData });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.postScholarshipPdf = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(424)
        .json({ status: "Failed", message: "No File Provided" });
    }
    const { name } = req.body;
    const path = req.file.filename;
    const newPdfData = new ScholarshipPdf({ name, path });
    const PdfData = await newPdfData.save();
    return res.status(200).json({ status: "Success", data: PdfData });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.editScholarshipPdf = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(424)
        .json({ status: "Failed", message: "No File Provided" });
    }
    const { name } = req.body;
    const path = req.file.filename;
    const id = req.params.id;
    const Pdf = await ScholarshipPdf.findById(id);
    const UpdatedPdf = await ScholarshipPdf.findByIdAndUpdate(id, {
      name,
      path,
    });
    fs.unlinkSync(`${__dirname}/../../uploads/scholarship/${Pdf.path}`);
    return res.status(200).json({ status: "Success", data: UpdatedPdf });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.deleteScholarshipPdf = async (req, res) => {
  try {
    const id = req.params.id;
    const Pdf = await ScholarshipPdf.findById(id);
    const DeletedPdf = await ScholarshipPdf.findByIdAndDelete(id);
    fs.unlinkSync(`${__dirname}/../../uploads/scholarship/${Pdf.path}`);
    return res.status(200).json({ status: "Success", data: DeletedPdf });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};
