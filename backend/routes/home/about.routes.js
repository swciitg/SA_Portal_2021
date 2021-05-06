const express = require("express");
const router = express.Router({ mergeParams: true });
const aboutController = require("../../controllers/home/about.controller");


router.route("/")
  .get(aboutController.getAbout)
  .post(aboutController.postAbout);

module.exports = router;