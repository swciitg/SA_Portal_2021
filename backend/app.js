const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const session = require("express-session");
const mongoSanitize = require("express-mongo-sanitize");

const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const cors = require("cors");
const bodyParser=require('body-parser');
require("dotenv").config();
const MONGO_URI = "mongodb://localhost/SA_DB";
const helmet = require("helmet");

const PORT = 8080 || process.env.PORT;
//require("./config/passportOutlook");
require("./config/passportAzure");

const globalErrorHandler=require("./controllers/errorController");

const scholarshipRoutes = require("./routes/scholarship.routes");
const announcementRoutes = require("./routes/announcement.routes");
const eventRoutes = require("./routes/events/events.routes");
const achievementRoutes = require("./routes/achievement.routes");
const authRoutes = require("./routes/auth.routes");


mongoose
  .connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Successful DB connection"))
  .catch((err) => console.error("DB connection fail"));



var corsOptions = {
  origin: "http://localhost:3000",
  // origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); //Change this later to restrict it to react app only
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use("/sa/uploads", express.static(__dirname + "/uploads"));
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

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/home/scholarship", scholarshipRoutes);
app.use("/api/home/announcement", announcementRoutes);
app.use("/api/home/events", eventRoutes);
app.use("/api/home/achievements", achievementRoutes);
app.use("/api", authRoutes);



app.use(helmet({ contentSecurityPolicy: false }));


app.use(globalErrorHandler);



app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});
