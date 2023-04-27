const { Router } = require("express");
const getStatusFocoArduino = require("../../controllers/arduino/getStatusFocoArduino.controller");

const router = Router();

router.post("/send/status", getStatusFocoArduino)




module.exports = router;