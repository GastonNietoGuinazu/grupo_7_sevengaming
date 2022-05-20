const express = require("express");
const router = express.Router();
const uploadFile = require('../app')


//Se realiza destructuring de los métodos de productsController
const { compra, venta, detalle } = require("../controllers/productsController.js")
const getProducts = require('../controllers/productsController')

/* router.get("/compra", compra)
router.get("/venta", venta)
router.get("/:num", detalle) */
router.get("/products", getProducts);
router.get("/products/create", uploadFile.single('avatarFile'), (req, res) => {
    res.json({message: "Hola amigo"})
})

module.exports = router;
