const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController.js")

router.get("/registrarse", usersController.register)
router.get("/conectarse", usersController.login)

module.exports = router;