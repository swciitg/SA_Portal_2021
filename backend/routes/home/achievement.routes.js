const express = require("express");
const router = express.Router({ mergeParams: true });
const { isLoggedIn, isAdmin } = require("../../middlewares/auth");
const achievementController = require("../../controllers/home/achievement.controller");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/../../uploads/achievements`);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.replace(/\s/g, "");
    cb(null, Date.now().toString() + fileName);
  },
});
const upload = multer({ storage: storage });



router.get("/", achievementController.getAchievements);
router.post("/",isLoggedIn,isAdmin, upload.single("img"), achievementController.postAchievement);

router.put("/:id",isLoggedIn,isAdmin, upload.single("img"), achievementController.editAchievement);

router.delete("/:id",isLoggedIn,isAdmin, achievementController.deleteAchievement);

module.exports = router;
