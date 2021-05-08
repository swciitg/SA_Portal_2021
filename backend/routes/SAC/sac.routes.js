const express = require("express");
const router = express.Router({ mergeParams: true });
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/../../uploads/Sac`);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.replace(/\s/g, "");
    cb(null, Date.now().toString() + fileName);
  },
});
const sacController = require("../../controllers/SAC/sac.controller");
const { isLoggedIn, isAdmin } = require("../../middlewares/auth");

const upload = multer({ storage: storage });

router.get("/", sacController.getSac);

router.post(
  "/",
  isLoggedIn, isAdmin ,
  upload.single("path"),
  sacController.postSac
);

router.get("/:id", sacController.getOneSac); //only for rules with pdfs

router.put(
  "/:id",
  isLoggedIn, isAdmin ,
  upload.single("path"),
  sacController.editSac
);

router.delete("/:id",isLoggedIn, isAdmin ,  sacController.deleteSac);

const compare = (a, b) => {
  return b.creation - a.creation;
};

module.exports = router;
