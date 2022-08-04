const express = require("express");
const router = express.Router();

/********** Controller **********/
const usersController = require("../controllers/usersController.js");

/********* Middlewares **********/
const validationsRegister = require("../middlewares/registerValidations.js");
const validationsLogin = require("../middlewares/loginValidations.js");
const logueado = require("../middlewares/logueado.js");
const autorizacion = require("../middlewares/autorizacion.js");

/********** Views **********/
router.get("/", usersController.list); //Nada, pendiente a definir
router.get("/cuenta", usersController.account); //Nada, pendiente a definir
router.get("/profile/:id", usersController.profile); //Obtengo el usuario by pk??
router.get("/login", usersController.login); //Formulario de login
router.post("/login", usersController.processLogin); //Procesa el ingreso de una cuenta
router.get("/registrarse", usersController.register); //Formulario de creación de cuenta
router.post("/registrarse", usersController.processRegister); //Procesa la creacion de una cuenta
router.get("/modificarUsuario", usersController.formUser); //Formulario de modificacion de usuario
router.post("/modificarUsuario", usersController.edit); //Procesa la modificacion de usuario
router.get("/logout", usersController.logout); //Cerrar Seción

module.exports = router;