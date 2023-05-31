const { Router } = require("express");
const sendStatusFocoArduino = require("../../controllers/arduino/sendStatusFocoArduino.controller");
const setStatusFocoArduinoBle = require("../../controllers/arduino/setStatusFocoArduinoBle.controller");

const router = Router();

router.post("/send/status", sendStatusFocoArduino)

router.post("/send/Blestatus", setStatusFocoArduinoBle)


module.exports = router;