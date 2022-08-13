const { check } = require("express-validator");

const validationsLogin = [
    check('email').isEmail().withMessage('Email inválido').bail(),
    check('password').notEmpty().withMessage('Debes colocar tu contraseña')
];

module.exports = validationsLogin;