const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
require("dotenv").config();
const MONGO_URI = "mongodb://localhost/SA_DB";
const PORT = 8080 || process.env.PORT;
require("./config/passportOutlook");

const authRoutes = require("./routes/auth.routes");

app.use(cookieParser());
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cookieSession({
    name: "sa-portal-session",
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ["lorem ipsum"],
  })
);

app.use("/api", authRoutes);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

// app.listen(PORT, () => {
//   console.log(`Server running at PORT ${PORT}`);
// });
