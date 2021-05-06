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
const { isLoggedIn, isAdmin } = require("../../middlewares/auth");
 
const upload = multer({ storage: storage });

router.get("/", ScholarshipController.getScholarshipData);
router.get("/editor", ScholarshipController.getScholarshipEditorData);
router.get("/pdf" , ScholarshipController.getScholarshipPdfData);

router.post("/editor",ScholarshipController.postScholarshipEditor);
router.post("/pdf", upload.single("path"), ScholarshipController.postScholarshipPdf);


router.put("/pdf/:id", upload.single("path"), ScholarshipController.editScholarshipPdf);

router.delete("/pdf/:id", ScholarshipController.deleteScholarshipPdf);

const compare = (a, b) => {
  return b.creation - a.creation;
};

module.exports = router;
