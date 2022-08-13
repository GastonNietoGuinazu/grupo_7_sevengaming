const { check } = require("express-validator");

const validationsRegister = [
    check("first_name")
    .notEmpty().withMessage('Debes poner un nombre')
    .bail(),

    check("last_name")
    .notEmpty().withMessage("Debes poner un apellido")
    .bail(),

    check("email")
    .isEmail().withMessage('Email inválido')
    .bail(),

    check("password")
    .notEmpty().withMessage("Debes poner una contraseña")
    .bail()
    .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres'),
    
    check("categoryId")
    .notEmpty().withMessage("Debes elegir una opción"),
];

module.exports = validationsRegister;