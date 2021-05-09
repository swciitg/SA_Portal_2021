const express = require("express");
const router = express.Router();

const eventsController = require("../../controllers/home/events.controller");
const multerMiddleware = require("../../middlewares/multer");
const { isLoggedIn } = require("../../middlewares/auth");

/*### Routes which doesn't need authentication ###*/
router.get("/", eventsController.getAllEvents);
router.get("/categories", eventsController.getCategories);

router.post("/find", eventsController.findEvent);

/*### Routes which need authentication ###*/
router.post(
  "/",
  isLoggedIn,
  multerMiddleware.thumbnailImageUploadMiddleware,
  eventsController.createEvent
);
router.delete("/:id", isLoggedIn, eventsController.deleteEvent);
router.put(
  "/:id",
  isLoggedIn,
  multerMiddleware.thumbnailImageUploadMiddleware,
  eventsController.updateEvent
);

module.exports = router;
