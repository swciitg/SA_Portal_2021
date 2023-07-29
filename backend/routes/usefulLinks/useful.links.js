const express = require("express");
const router = express.Router({ mergeParams: true });
const { isLoggedIn, isAdmin } = require("../../middlewares/auth");
const linkController = require("../../controllers/usefulLinks/useful.links");

router.get("/", linkController.getAllLinks);
router.post("/", isLoggedIn, isAdmin, linkController.postLink);

router.put("/:link_id", isLoggedIn, isAdmin, linkController.editLink);
router.delete("/:link_id", isLoggedIn, isAdmin, linkController.deleteLink);

router.get("/:link_id/sublinks", linkController.getAllSublinks);

router.post(
  "/:link_id/sublinks",
  isLoggedIn,
  isAdmin,
  linkController.postSublink
);

router.put(
  "/:link_id/sublinks/:sublink_id",
  isLoggedIn,
  isAdmin,
  linkController.editSublink
);
router.delete(
  "/:link_id/sublinks/:sublink_id",
  isLoggedIn,
  isAdmin,
  linkController.deleteSublink
);

module.exports = router;