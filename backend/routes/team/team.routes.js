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

const TeamController = require("../../controllers/team/team.controller");
const { isLoggedIn, isAdmin } = require("../../middlewares/auth");

const upload = multer({ storage: storage });

router.get("/", TeamController.getTeam);
router.post("/", upload.single("image") , TeamController.postTeam);

router.put("/:id", upload.single("image") , TeamController.editTeam);
router.delete("/:id", TeamController.deleteTeam);

module.exports = router;