const { check } = require("express-validator");

const validationsLogin = [
    check('email').isEmail().withMessage('Email inválido'), 
    check('password').isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres')
];

module.exports = validationsLogin;