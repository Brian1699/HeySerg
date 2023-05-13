const express = require("express");
const app = express();


//* arduino
app.use("/arduino", require("./arduino/arduino"));

//* web
app.use("/web", require("./web/web"));

//* movil
app.use("/movil", require("./movil/movil"));

//* telegram
app.use("/telegram", require("./telegram/telegram"));



module.exports = app;