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

router.post("/", upload.single("path"), galleryController.postImage);

router.get("/:id", galleryController.getOneImage); //only for rules with pdfs

router.put("/:id", upload.single("path"), galleryController.editImage);

router.delete("/:id", galleryController.deleteImage);

const compare = (a, b) => {
  return b.creation - a.creation;
};

module.exports = router;
