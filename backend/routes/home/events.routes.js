const express = require("express");
const router = express.Router();

const eventsController = require("../../controllers/home/eventsController");
const multerMiddleware = require("../../middlewares/multer");
const { isLoggedIn } = require("../../middlewares/auth");

router.get("/", eventsController.getAllEvents);
router.post(
  "/",
  isLoggedIn,
  multerMiddleware.thumbnailImageUploadMiddleware,
  eventsController.createEvent
);
router.delete("/:id", isLoggedIn, eventsController.deleteEvent);
router.put("/:id", isLoggedIn, eventsController.updateEvent);

module.exports = router;
