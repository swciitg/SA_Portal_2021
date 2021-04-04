const express = require("express");
const router = express.Router();
const aboutController = require("../controllers/about.controller");

router.route("/")
    .get(aboutController.getAbout)
    .post(aboutController.postAbout);

router.route("/:id")
    .delete(aboutController.deleteAbout)
    .put(aboutController.updateAbout);

module.exports = router;