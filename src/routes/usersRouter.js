const express = require("express");
const router = express.Router();

/********** Controller **********/
const usersController = require("../controllers/usersController.js");

/********* Middlewares **********/
const validationsRegister = require("../middlewares/registerValidations.js");
const validationsLogin = require("../middlewares/loginValidations.js");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");// En caso que queramos hacer un perfil para que no pueda acceser sino esta loguado

/********** Views **********/
router.get("/", usersController.list); //Nada, pendiente a definir
router.get("/cuenta", usersController.account); //Nada, pendiente a definir
router.get("/profile/:id", usersController.profile); //
router.get("/login",guestMiddleware, usersController.login); //Formulario de login
router.post("/login", usersController.processLogin); //Procesa el ingreso de una cuenta
router.get("/registrarse",guestMiddleware, usersController.register); //Formulario de creación de cuenta
router.post("/registrarse", usersController.processRegister); //Procesa la creacion de una cuenta
router.get("/modificarUsuario", usersController.formUser); //Formulario de modificacion de usuario
router.post("/modificarUsuario", usersController.edit); //Procesa la modificacion de usuario
router.get("/logout", usersController.logout); //Cerrar Sesión

module.exports = router;