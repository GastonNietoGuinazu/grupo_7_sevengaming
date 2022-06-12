const { check } = require("express-validator");

const validationsRegister = [
    check("nombre"),
    check("apellido"),
    check("email").isEmail().withMessage('Email inválido'), 
    check("contraseña").isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
    check("contraseña2"),
];

module.exports = validationsRegister;