const { BASEAPI } = process.env;

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.status(401).json({
      status: "Not authenticated",
      msg: "You are not authenticated !",
    });
  }
};

const isStudent = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.redirect(`${BASEAPI}/auth/azureadoauth2`);
  }
};

const isAdmin = (req, res, next) => {
  if (req.user.isAdmin) {
    return next();
  } else {
    return res.status(401).json({
      status: "Not authorized",
      msg: "You are not authorized !",
    });
  }
};

module.exports = { isLoggedIn, isAdmin, isStudent };
