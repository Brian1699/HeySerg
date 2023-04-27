const { Router } = require("express");
const sendStatusFocoArduino = require("../../controllers/arduino/sendStatusFocoArduino.controller");

const router = Router();

router.post("/send/status", sendStatusFocoArduino)


module.exports = router;