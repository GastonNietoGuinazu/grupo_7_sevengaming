const { check } = require("express-validator");

const validationsRegister = [
    check("first_name"),
    check("last_name"),
    check("email").isEmail().withMessage('Email inválido'), 
    check("password").isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
];

module.exports = validationsRegister;