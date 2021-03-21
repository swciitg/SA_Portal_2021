const passport = require("passport");
const OutlookStrategy = require("passport-outlook").Strategy;
const User = require("../models/user");
const OUTLOOK_CLIENT_ID = process.env.OUTLOOK_CLIENT_ID;
const OUTLOOK_CLIENT_SECRET = process.env.OUTLOOK_CLIENT_SECRET;
const OUTLOOK_TENANT_URL = process.env.OUTLOOK_TENANT_URL;

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  new OutlookStrategy(
    {
      //identityMetadata: OUTLOOK_TENANT_URL,
      clientID: OUTLOOK_CLIENT_ID,
      clientSecret: OUTLOOK_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/api/auth/outlook/callback",
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      const user = await User.findOne({ outlookId: profile.id });
      if (user) return done(null, user);

      const newUser = new User({
        outlookId: profile.id,
        name: profile._json.DisplayName,
        email: profile._json.EmailAddress,
        accessToken: accessToken,
        // isverified: true,
      });
      if (refreshToken) newUser.refreshToken = refreshToken;
      if (profile.MailboxGuid) newUser.mailboxGuid = profile.MailboxGuid;
      if (profile.Alias) newUser.alias = profile.Alias;

      await newUser.save();
      return done(null, newUser);
    }
  )
);
