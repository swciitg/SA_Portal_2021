const express = require("express");
const fs = require("fs");
const router = express.Router({ mergeParams: true });
const aboutController = require("../../controllers/home/about.controller");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,`${__dirname}/../../uploads`);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.replace(/\s/g, "");
    cb(null, Date.now().toString() + fileName);
    console.log(fileName);
  },
});

const upload = multer({ storage: storage });



router.route("/")
    .get(aboutController.getAbout)

router.post(
        "/",
        upload.single("imgPath"),
        aboutController.postAbout
      );


router.route("/:id")
    .delete(aboutController.deleteAbout)
    .put(aboutController.updateAbout);

module.exports = router;