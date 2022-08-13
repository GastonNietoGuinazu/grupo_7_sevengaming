const express = require("express");
const router = express.Router();

/********** Controller **********/
const usersController = require("../controllers/usersController.js");

/********* Middlewares **********/
const validationsRegister = require("../middlewares/registerValidations.js");
const validationsLogin = require("../middlewares/loginValidations.js");
const logged = require("../middlewares/guestMiddleware"); // Para que el usuario no pueda acceder si esta logueado
const logout = require("../middlewares/authMiddleware"); // Para que el usuario no pueda acceser sino esta loguado

/********** Views **********/
router.get("/", usersController.list); //Nada, pendiente a definir
router.get("/perfil/:id", logout, usersController.account); //Vista perfil del usuario
router.get("/login", logged, usersController.login); //Formulario de login
router.post("/login", validationsLogin, usersController.processLogin); //Procesa el ingreso de una cuenta
router.get("/registrarse", logged, usersController.register); //Formulario de creación de cuenta
router.post("/registrarse", validationsRegister, usersController.processRegister); //Procesa la creacion de una cuenta
router.get("/editar/:id", logout, usersController.edit); //Formulario de modificacion de usuario
router.post("/editar/:id", usersController.upDate); //Procesa la modificacion de usuario
router.get("/eliminar/:id", logout, usersController.deleted); //Vista formulario de eliminacion de cuenta
router.post("/eliminar/:id", usersController.destroy); //Procesa la eliminación del usuario
router.get("/logout", usersController.logout); //Cerrar Sesión

module.exports = router;