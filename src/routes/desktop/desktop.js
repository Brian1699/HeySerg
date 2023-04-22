const { Router } = require("express");
const getUpdates = require("../../controllers/desktop/getUpdates.controller");
const createUser= require("../../controllers/Users/createUser.controller");
const addSomething=  require("../../controllers/Users/addSomething.controller");

const router = Router();

router.get("/getUpdates", getUpdates)

router.get("/createUser", createUser)

router.post("/addSomething", addSomething)

module.exports = router;