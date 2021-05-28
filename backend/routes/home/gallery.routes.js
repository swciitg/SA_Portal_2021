const express = require("express");
const router = express.Router({ mergeParams: true });
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/../../uploads/gallery`);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.replace(/\s/g, "");
    cb(null, Date.now().toString() + fileName);
  },
});
const galleryController = require("../../controllers/home/galleryController");
const { isLoggedIn, isAdmin } = require("../../middlewares/auth");

const upload = multer({ storage: storage });

router.get("/", galleryController.getImages);

router.post(
  "/",
  isLoggedIn,
  isAdmin,
  upload.single("path"),
  galleryController.postImage
);

router.get("/:id", galleryController.getOneImage);

router.put(
  "/:id",
  isLoggedIn,
  isAdmin,
  upload.single("path"),
  galleryController.editImage
);

router.delete("/:id", isLoggedIn, isAdmin, galleryController.deleteImage);

const compare = (a, b) => {
  return b.creation - a.creation;
};

module.exports = router;
