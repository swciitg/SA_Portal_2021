const express = require("express");
const router = express.Router({ mergeParams: true });
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/../../uploads/forms`);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.replace(/\s/g, "");
    cb(null, Date.now().toString() + fileName);
  },
});
const formController = require("../../controllers/forms/form.controller");

const upload = multer({ storage: storage });

router.get("/", formController.getForms);

router.post("/", upload.single("path"), formController.postForm);


router.get("/pdf/:id", formController.getOneForm);

router.put("/:id", upload.single("path"), formController.editForm);

router.delete("/:id", formController.deleteForm);

const compare = (a, b) => {
  return b.creation - a.creation;
};

module.exports = router;
