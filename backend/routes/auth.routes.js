const express = require("express");
const router = express.Router({ mergeParams: true });

//const { authenticate, isLoggedIn } = require("../middleware/index");
const passport = require("passport");
const { isLoggedIn } = require("../middlewares/auth");
const { CLIENT_HOME_PAGE_URL } = process.env;

router.get("/auth/azureadoauth2", passport.authenticate("azure_ad_oauth2"));

router.get(
  "/auth/azureadoauth2/callback",
  passport.authenticate("azure_ad_oauth2", {
    failureRedirect: "/sa/api/auth/failed",
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    if (req.user.isAdmin) {
      return res.redirect(CLIENT_HOME_PAGE_URL + "/admin");
    } else {
      return res.redirect(CLIENT_HOME_PAGE_URL);
    }
  }
);

router.get("/auth/failed", (req, res) => {
  return res.status(401).json({
    success: false,
    msg: "user authentication failed",
  });
});

router.get("/auth/logout", function (req, res) {
  req.session = null;
  req.logout();
  console.log("Logout route hit");
  return res.redirect(CLIENT_HOME_PAGE_URL + "/admin");
  // res.status(200).json({ msg: "Logged out successfully" });
});

router.get("/current_user", isLoggedIn, (req, res) => {
  try {
    console.log(req.user.id);
    res.send(req.user);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
