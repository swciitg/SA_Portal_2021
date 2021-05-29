const express = require("express");
const router = express.Router({ mergeParams: true });
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/../../uploads/navigation`);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.replace(/\s/g, "");
    cb(null, Date.now().toString() + fileName);
  },
});
const navigationController = require("../../controllers/home/navigation.controller");
const { isLoggedIn, isAdmin } = require("../../middlewares/auth");

const upload = multer({ storage: storage });

router.get("/", navigationController.getAllNavigations);
router.get("/:id", navigationController.getNavigationImage);

router.post(
  "/",
  isLoggedIn,
  isAdmin,
  upload.single("path"),
  navigationController.createNavigation
);

router.post("/find", navigationController.findNavigation);

router.put(
  "/:id",
  isLoggedIn,
  isAdmin,
  upload.single("path"),
  navigationController.updateNavigation
);

router.delete(
  "/:id",
  isLoggedIn,
  isAdmin,
  navigationController.deleteNavigation
);

const compare = (a, b) => {
  return b.creation - a.creation;
};

module.exports = router;
