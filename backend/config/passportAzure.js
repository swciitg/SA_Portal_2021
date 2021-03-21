const passport = require("passport");
const AzureAdOAuth2Strategy = require("passport-azure-ad-oauth2").Strategy;
const User = require("../models/user");
const OUTLOOK_CLIENT_ID = process.env.OUTLOOK_CLIENT_ID;
const OUTLOOK_CLIENT_SECRET = process.env.OUTLOOK_CLIENT_SECRET;
const OUTLOOK_TENANT_URL = process.env.OUTLOOK_TENANT_URL;
const jwt = require("jsonwebtoken");

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  new AzureAdOAuth2Strategy(
    {
      //identityMetadata: OUTLOOK_TENANT_URL,
      clientID: OUTLOOK_CLIENT_ID,
      clientSecret: OUTLOOK_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/api/auth/azureadoauth2/callback",
      //passReqToCallback: true,
    },
    async (accessToken, refresh_token, params, profile, done) => {
      try {
        var waadProfile = jwt.decode(params.id_token);
        //console.log(waadProfile);

        const user = await User.findOne({ email: waadProfile.upn });
        if (user) return done(null, user);

        const newUser = new User({
          outlookId: waadProfile.oid,
          name: waadProfile.name,
          email: waadProfile.upn,
          accessToken: accessToken,
          // isverified: true,
        });
        if (refresh_token) newUser.refreshToken = refresh_token;

        await newUser.save();
        return done(null, newUser);
      } catch (error) {
        console.log(error.message);
      }
    }
  )
);
