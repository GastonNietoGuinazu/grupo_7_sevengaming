const { check } = require("express-validator");

const validationsCreate = [
    check('name').notEmpty().withMessage("Debes poner un nombre.")
    .bail()
    .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres.'),

    check('description')
    .isLength({ min: 20 }).withMessage('La descripción debe tener al menos 20 caracteres.'),

    check('categoryId')
    .notEmpty().withMessage("Debes seleccionar una categoría."),

    check('price')
    .notEmpty().withMessage("Debes poner un precio."),
];

module.exports = validationsCreate;