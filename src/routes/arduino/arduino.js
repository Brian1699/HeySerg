const { Router } = require("express");
const getUpdates = require("../../controllers/desktop/getUpdates.controller");
const addSomething=  require("../../controllers/Users/addSomething.controller");

const router = Router();

router.get("/getUpdates", getUpdates)

router.post("/addSomething", addSomething)

module.exports = router;