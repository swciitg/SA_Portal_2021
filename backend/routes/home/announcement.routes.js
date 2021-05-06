const express = require("express");
const router = express.Router({ mergeParams: true });
const { isLoggedIn, isAdmin } = require("../../middlewares/auth");

const announcementController = require("../../controllers/home/announcement.controller");

router.get("/", announcementController.getAnnouncements);
router.get("/categories", announcementController.getCategories);

router.post("/",isLoggedIn,isAdmin, announcementController.postAnnouncement);

router.put("/:id",isLoggedIn,isAdmin, announcementController.editAnnouncement);
router.post("/find", announcementController.findAnnouncement);

router.delete("/:id",isLoggedIn,isAdmin, announcementController.deleteAnnouncement);

module.exports = router;
