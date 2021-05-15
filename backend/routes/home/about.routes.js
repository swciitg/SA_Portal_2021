const express = require("express");
const router = express.Router({ mergeParams: true });
const aboutController = require("../../controllers/home/about.controller");

const { isLoggedIn, isAdmin } = require("../../middlewares/auth");

router
  .get("/",aboutController.getAbout)
  .post("/",isLoggedIn, isAdmin,aboutController.postAbout);

module.exports = router;