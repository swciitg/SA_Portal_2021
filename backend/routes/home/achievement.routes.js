const express = require("express");
const router = express.Router({ mergeParams: true });
const { isLoggedIn, isAdmin } = require("../../middlewares/auth");
const achievementController = require("../../controllers/home/achievement.controller");



router.get("/", achievementController.getAchievements);
router.post("/",isLoggedIn,isAdmin,  achievementController.postAchievement);

router.put("/:id",isLoggedIn,isAdmin,  achievementController.editAchievement);

router.delete("/:id",isLoggedIn,isAdmin, achievementController.deleteAchievement);

module.exports = router;
