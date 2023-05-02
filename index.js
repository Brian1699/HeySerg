const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const helmet = require("helmet");
const env = require("./src/env");
const corsConfig = require("./src/corsConfig");

const app = express();

//? CORS
app.use(corsConfig());

//? Enable raw body on request object
const rawBodySaver = (req, res, buf, encoding) => {
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || "utf8");
  }
};

const options = {
  verify: rawBodySaver
};

app.use(express.json(options));
app.use(helmet());

app.set("trust proxy", true);

//* Access log
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "../access.log"),
  { flags: "a" }
);
app.use(morgan("combined", { stream: accessLogStream }));

app.use(require("./src/routes/index"));

app.listen(env.PORT, () => {
  console.log("Server running");
});

module.exports = app;