const express = require("express");
const router = express.Router();

const eventsController = require("../../controllers/home/eventsController");
const multerMiddleware = require("../../middlewares/multer");
const { isLoggedIn, isAdmin } = require("../../middlewares/auth");

router.get("/", eventsController.getAllEvents);
router.post(
  "/",
  isLoggedIn,isAdmin,
  multerMiddleware.thumbnailImageUploadMiddleware,
  eventsController.createEvent
);
router.delete("/:id", isLoggedIn,isAdmin, eventsController.deleteEvent);
router.put("/:id", isLoggedIn,isAdmin, eventsController.updateEvent);

module.exports = router;
