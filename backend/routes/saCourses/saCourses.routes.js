const express = require("express");
const router = express.Router({ mergeParams: true });
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/../../uploads/saCourses`);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.replace(/\s/g, "");
    cb(null, Date.now().toString() + fileName);
  },
});
const courseController = require("../../controllers/saCourses/saCourses.controller");
const { isLoggedIn, isAdmin, isStudent } = require("../../middlewares/auth");

const upload = multer({ storage: storage });

router.get("/", courseController.getCourses);

router.post(
  "/",
  isLoggedIn,
  isAdmin,
  upload.single("path"),
  courseController.postCourse
);

router.get("/:id", isStudent, courseController.getOneCourse); //only for courses with pdfs

router.put(
  "/:id",
  isLoggedIn,
  isAdmin,
  upload.single("path"),
  courseController.editCourse
);

router.delete("/:id", isLoggedIn, isAdmin, courseController.deleteCourse);

module.exports = router;
