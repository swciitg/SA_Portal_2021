const Course = require("../../models/saCourses/courses");
const fs = require("fs");

exports.getCourses = async (req, res) => {
  try {
    let query = Course.find({}).sort("-updatedAt");
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

exports.postCourse = async (req, res) => {
  try {
    const { link, name } = req.body;
    const path = req.file ? req.file.filename : link;
    const format = req.file ? "PDF" : "Link";
    const newCourse = new Course({ path, format, name });
    const course = await newCourse.save();

    if (course)
      return res.status(200).json({ status: "Success", data: course });
    else res.status(424).json({ status: "Failed", message: "Invalid Data" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.editCourse = async (req, res) => {
  try {
    const { link, name } = req.body;
    const path = req.file ? req.file.filename : link;
    const format = req.file ? "PDF" : "Link";
    let data;
    if (!req.file && !link) {
      data = { name };
    } else {
      data = { path, format, name };
      const id = req.params.id;

      const oldCourse = await Course.findById(id);
      if (oldCourse.path.indexOf("https://") == -1) {
        fs.unlinkSync(`${__dirname}/../../uploads/saCourses/${oldCourse.path}`);
      }
    }

    const course = await Course.findByIdAndUpdate(req.params.id, data);
    if (course)
      return res.status(200).json({ status: "Success", data: course });
    else res.status(424).json({ status: "Failed", message: "Invalid Data" });
  } catch (error) {
    console.log("course controller edit", error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.getOneCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);
    if (course.path.indexOf("https://") == -1) {
      const filePath = `${__dirname}/../../uploads/saCourses/` + course.path;
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
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);

    if (course.path.indexOf("https://") == -1) {
      fs.unlinkSync(`${__dirname}/../../uploads/saCourses/${course.path}`);
      console.log("successfully deleted file");
    }
    await Course.findByIdAndRemove(id);
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
