const express = require("express");
const router = express.Router();

/********** Controller **********/
const usersController = require("../controllers/usersController.js");

/********* Middlewares **********/
const validationsRegister = require("../middlewares/registerValidations.js");
const validationsLogin = require("../middlewares/loginValidations.js");

/********** Views **********/
router.get('/login', usersController.login); //Formulario de login
router.get("/cuenta", usersController.account); //Nada, pendiente a definir
router.get("/registrarse", usersController.register); //Formulario de creación de cuenta
router.post('/login', validationsLogin, usersController.processLogin); //Procesa el ingreso de una cuenta
router.post("/registrarse", validationsRegister, usersController.processRegister); //Procesa la creacion de una cuenta

module.exports = router;