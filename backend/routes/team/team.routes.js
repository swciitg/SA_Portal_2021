const express = require("express");
const router = express.Router({ mergeParams: true });
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/../../uploads/team`);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.replace(/\s/g, "");
    cb(null, Date.now().toString() + fileName);
  },
});

const teamController = require("../../controllers/team/team.controller");
const { isLoggedIn, isAdmin } = require("../../middlewares/auth");

const upload = multer({ storage: storage });

router.get("/:team",teamController.getTeamMembers);
router.post("/:team/",isLoggedIn, isAdmin, upload.single("image") , teamController.postMember);

router.put("/:team/:id",isLoggedIn, isAdmin, upload.single("image") , teamController.editMember);
router.delete("/:team/:id",isLoggedIn, isAdmin, teamController.deleteMember);

module.exports = router;