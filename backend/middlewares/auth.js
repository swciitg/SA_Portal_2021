const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res
      .status(401)
      .json({
        status: "Not authenticated",
        msg: "You are not authenticated !",
      });
  }
};

module.exports = { isLoggedIn };
