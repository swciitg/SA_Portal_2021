const express = require("express");
const router = express.Router();

const eventsController = require("../../controllers/home/eventsController");

router.get("/", eventsController.getAllEvents);
router.post("/", eventsController.createEvent);
router.delete("/:id", eventsController.deleteEvent);
router.put("/:id", eventsController.updateEvent);

module.exports = router;
