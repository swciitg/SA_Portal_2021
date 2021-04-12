const express = require("express");
const router = express.Router({ mergeParams: true });
const { isLoggedIn } = require("../../middlewares");
const achievementController = require("../../controllers/home/achievement.controller");

router.get("/", achievementController.getAchievements);
router.post("/", achievementController.postAchievements);

module.exports = router;
