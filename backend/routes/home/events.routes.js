const express = require("express");
const router = express.Router();

const eventsController = require("../../controllers/home/events.controller");
const multerMiddleware = require("../../middlewares/multer");
const { isLoggedIn, isAdmin } = require("../../middlewares/auth");

/*### Routes which doesn't need authentication ###*/
router.get("/", eventsController.getAllEvents);
router.get("/categories", eventsController.getCategories);
router.get("/:id", eventsController.getOneImage);

router.post("/find", eventsController.findEvent);

/*### Routes which need authentication ###*/
router.post(
  "/",
  isLoggedIn,
  isAdmin,
  multerMiddleware.thumbnailImageUploadMiddleware,
  eventsController.createEvent
);
router.delete("/:id", isLoggedIn, isAdmin, eventsController.deleteEvent);
router.put(
  "/:id",
  isLoggedIn,
  isAdmin,
  multerMiddleware.thumbnailImageUploadMiddleware,
  eventsController.updateEvent
);

module.exports = router;
