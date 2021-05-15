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

router.get("/", teamController.getAllMembers);
router.get("/office/:office", teamController.getOfficeMembers);
router.get("/team/:team",teamController.getTeamMembers);
router.post("/",isLoggedIn, isAdmin, upload.single("image") , teamController.postMember);

router.put("/:id",isLoggedIn, isAdmin, upload.single("image") , teamController.editMember);
router.delete("/:id",isLoggedIn, isAdmin, teamController.deleteMember);

module.exports = router;