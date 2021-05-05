const express = require("express");
const router = express.Router({ mergeParams: true });
const { isLoggedIn } = require("../middlewares/auth");

router.get("/", (req, res) => {
  console.log("csdf");
});

module.exports = router;
