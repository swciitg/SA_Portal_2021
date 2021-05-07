const express = require("express");
const router = express.Router({ mergeParams: true });
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/../../uploads/rules`);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.replace(/\s/g, "");
    cb(null, Date.now().toString() + fileName);
  },
});
const ruleController = require("../../controllers/rules/rulesController");
const { isLoggedIn, isAdmin } = require("../../middlewares/auth");

const upload = multer({ storage: storage });

router.get("/", ruleController.getRules);

router.post(
  "/",
  isLoggedIn,
  isAdmin,
  upload.single("path"),
  ruleController.postRule
);

router.get("/:id", ruleController.getOneRule);

router.put(
  "/:id",
  isLoggedIn,
  isAdmin,
  upload.single("path"),
  ruleController.editRule
);

router.delete("/:id", isLoggedIn, isAdmin, ruleController.deleteRule);

const compare = (a, b) => {
  return b.creation - a.creation;
};

module.exports = router;
