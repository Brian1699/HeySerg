const { Router } = require("express");
const getStatusFocoArduino = require("../../controllers/web/getStatusFocoArduino.controller");
const updateStatusFocoArduino = require("../../controllers/web/updateStatusFocoArduino.controller");

const router = Router();

router.get("/get/status/foco", getStatusFocoArduino)

router.post("/set/status/foco", updateStatusFocoArduino)


module.exports = router;