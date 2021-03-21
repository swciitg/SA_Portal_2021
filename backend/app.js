const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const cors = require("cors");
require("dotenv").config();
const MONGO_URI = "mongodb://localhost/SA_DB";
const PORT = 8080 || process.env.PORT;
//require("./config/passportOutlook");
require("./config/passportAzure");

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
app.use(express.json());

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

app.use("/api", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});
