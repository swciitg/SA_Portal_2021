const express = require("express");
const router = express.Router();

const eventsController = require("../../controllers/home/eventsController");
const multerMiddleware = require("../../middlewares/multer");
const { isLoggedIn } = require("../../middlewares/auth");

/*### Routes which doesn't need authentication ###*/
router.get("/", eventsController.getAllEvents);
router.post("/find", eventsController.findEvent);

/*### Routes which need authentication ###*/
router.post(
  "/",
  multerMiddleware.thumbnailImageUploadMiddleware,
  eventsController.createEvent
);
router.delete("/:id", eventsController.deleteEvent);
router.put(
  "/:id",
  multerMiddleware.thumbnailImageUploadMiddleware,
  eventsController.updateEvent
);

module.exports = router;
