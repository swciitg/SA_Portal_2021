const express = require("express");
const router = express.Router({ mergeParams: true });
const { isLoggedIn } = require("../../middlewares/auth");

const announcementController = require("../../controllers/home/announcement.controller");

router.get("/", announcementController.getAnnouncements);

router.post("/", announcementController.postAnnouncement);

router.put("/:id", announcementController.editAnnouncement);
router.post("/find", announcementController.findAnnouncement);

router.delete("/:id", announcementController.deleteAnnouncement);

module.exports = router;
