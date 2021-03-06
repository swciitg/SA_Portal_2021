const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const mongoSanitize = require("express-mongo-sanitize");

const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const cors = require("cors");
require("dotenv").config();
//const MONGO_URL = "mongodb://localhost/SA_DB";
const { MONGO_URL, BASECLIENT } = process.env;
console.log({ MONGO_URL, BASECLIENT });
// console.log("[Mongodb Url]", MONGO_URL);
const helmet = require("helmet");

const PORT = 8080 || process.env.PORT;
require("./config/passportAzure");

const scholarshipRoutes = require("./routes/scholarship/scholarship.routes");
const announcementRoutes = require("./routes/home/announcement.routes");
const eventRoutes = require("./routes/home/events.routes");
const navigationRoutes = require("./routes/home/navigation.routes");
const galleryRoutes = require("./routes/home/gallery.routes");
const rulesRoutes = require("./routes/rules/rules.routes");
const sacRoutes = require("./routes/SAC/sac.routes");
const courseRoutes = require("./routes/saCourses/saCourses.routes");
const achievementRoutes = require("./routes/home/achievement.routes");
const aboutRoutes = require("./routes/home/about.routes");
const teamRoutes = require("./routes/team/team.routes");
const formRoutes = require("./routes/forms/form.routes");
const utilityRoutes = require("./routes/utilities/link.routes");
const userRoutes = require("./routes/users/user.routes");
const authRoutes = require("./routes/auth.routes");

mongoose
  .connect(MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Successful DB connection"))
  .catch((err) => console.error("DB connection fail"));

var corsOptions = {
  origin: BASECLIENT,
  //origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", BASECLIENT); //Change this later to restrict it to react app only
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, x-auth-token, Origin, Accept"
  );
  next();
});

app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.static(__dirname + "./uploads"));

app.use(methodOverride("_method"));
app.use(mongoSanitize());

// SESSION MIDDLEWARE
app.use(
  cookieSession({
    name: "sa-portal-session",
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ["lorem ipsum"],
    httpOnly: false,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use("/sa/api/scholarship", scholarshipRoutes);
app.use("/sa/api/home/announcement", announcementRoutes);
app.use("/sa/api/home/events", eventRoutes);
app.use("/sa/api/home/navigation", navigationRoutes);
app.use("/sa/api/home/rules", rulesRoutes);
app.use("/sa/api/home/achievements", achievementRoutes);
app.use("/sa/api/home/about", aboutRoutes);
app.use("/sa/api/forms", formRoutes);
app.use("/sa/api/team", teamRoutes);
app.use("/sa/api/utilities", utilityRoutes);
app.use("/sa/api/rules", rulesRoutes);
app.use("/sa/api/gallery", galleryRoutes);
app.use("/sa/api/users", userRoutes);

app.use("/sa/api/sac", sacRoutes);
app.use("/sa/api/saCourse", courseRoutes);

app.use("/sa/api", authRoutes);

app.use(helmet({ contentSecurityPolicy: false }));

app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});
