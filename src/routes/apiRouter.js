const express = require("express");
const router = express.Router();

const apiController = require("../controllers/apiController.js")

router.get("/", apiController.api);

module.exports = router;