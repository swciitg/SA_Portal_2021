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
const { isLoggedIn, isAdmin } = require("../../middlewares/auth");


const upload = multer({ storage: storage });

router.get("/", formController.getForms);

router.post("/",isLoggedIn,isAdmin, upload.single("path"), formController.postForm);


router.get("/:id", formController.getOneForm);

router.put("/:id",isLoggedIn,isAdmin, upload.single("path"), formController.editForm);

router.delete("/:id",isLoggedIn,isAdmin, formController.deleteForm);

const compare = (a, b) => {
  return b.creation - a.creation;
};

module.exports = router;
