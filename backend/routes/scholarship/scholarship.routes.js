const express = require("express");
const router = express.Router({ mergeParams: true });
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/../../uploads/scholarship`);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.replace(/\s/g, "");
    cb(null, Date.now().toString() + fileName);
  },
});
const ScholarshipController = require("../../controllers/scholarship/scholarship.controller");
const { isLoggedIn, isAdmin, isStudent } = require("../../middlewares/auth");

const upload = multer({ storage: storage });

router.get("/", ScholarshipController.getScholarshipData);
router.get("/editor", ScholarshipController.getScholarshipEditorData);
router.get("/pdf", ScholarshipController.getScholarshipPdfData);
router.get("/pdf/:id", isStudent, ScholarshipController.getOneScholarshipPdf);

router.post(
  "/editor",
  isLoggedIn,
  isAdmin,
  ScholarshipController.postScholarshipEditor
);
router.post(
  "/pdf",
  isLoggedIn,
  isAdmin,
  upload.single("path"),
  ScholarshipController.postScholarshipPdf
);

router.put(
  "/pdf/:id",
  isLoggedIn,
  isAdmin,
  upload.single("path"),
  ScholarshipController.editScholarshipPdf
);

router.delete(
  "/pdf/:id",
  isLoggedIn,
  isAdmin,
  ScholarshipController.deleteScholarshipPdf
);

module.exports = router;
