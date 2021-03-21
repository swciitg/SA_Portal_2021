const express = require("express");
const router = express.Router({ mergeParams: true });

//const { authenticate, isLoggedIn } = require("../middleware/index");
const passport = require("passport");
const User = require("../models/user");
const { isLoggedIn } = require("../middlewares");
// const CLIENT_HOME_PAGE_URL = config.get("CLIENT_HOME_PAGE_URL") + "/";
const CLIENT_HOME_PAGE_URL = "http://localhost:3000";

////// PASSPORT-JS OUTLOOK OAUTH ROUTES

// router.get(
//   "/auth/outlook",
//   passport.authenticate("windowslive", {
//     scope: [
//       "openid",
//       "profile",
//       "offline_access",
//       "https://outlook.office.com/Mail.Read",
//     ],
//   })
// );

// router.get(
//   "/auth/outlook/callback",
//   passport.authenticate("windowslive", {
//     // successRedirect: CLIENT_HOME_PAGE_URL,
//     failureRedirect: "/failed",
//   }),
//   function (req, res) {
//     // Successful authentication
//     res.redirect(CLIENT_HOME_PAGE_URL + "/admin");
//   }
// );

router.get("/auth/azureadoauth2", passport.authenticate("azure_ad_oauth2"));

router.get(
  "/auth/azureadoauth2/callback",
  passport.authenticate("azure_ad_oauth2", { failureRedirect: "/failed" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect(CLIENT_HOME_PAGE_URL + "/admin");
  }
);

router.get("/failed", (req, res) => {
  res.status(401).json({
    success: false,
    msg: "user authentication failed",
  });
});

router.get("/auth/logout", function (req, res) {
  req.session = null;
  req.logout();
  res.redirect(CLIENT_HOME_PAGE_URL + "/admin");
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
