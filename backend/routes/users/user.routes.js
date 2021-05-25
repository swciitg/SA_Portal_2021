const express = require("express");
const router = express.Router({ mergeParams: true });
const { isLoggedIn, isAdmin } = require("../../middlewares/auth");

const userController=require("../../controllers/users/user.controller");

router.get("/", isLoggedIn,isAdmin, userController.getUsers);
router.put("/:id", isLoggedIn,isAdmin, userController.changeAdmin);
router.delete("/:id", isLoggedIn,isAdmin, userController.deleteUser);
 

module.exports = router;
