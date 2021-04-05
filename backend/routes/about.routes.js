const express = require("express");
const fs = require("fs");
const router = express.Router({ mergeParams: true });
const aboutController = require("../controllers/about.controller");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../uploads");
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
        ()=>{
          console.log("asAS")
        },
        aboutController.postAbout
      );


router.route("/:id")
    .delete(aboutController.deleteAbout)
    .put(aboutController.updateAbout);

module.exports = router;