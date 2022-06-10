const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');

const usersController = require("../controllers/usersController.js")

/* router.post('/login', usersController.login); */
router.get("/cuenta", usersController.account);
router.get("/registrarse", usersController.register)

// Ruta de Login
router.post('/login',[
check('email'). isEmail().withMessage('Email inválido'),
check('password'). isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres')
], usersController.processLogin)

module.exports = router;