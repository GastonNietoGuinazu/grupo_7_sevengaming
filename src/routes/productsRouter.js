const express = require("express");
const router = express.Router();
const uploadFile = require('../app');

//Se realiza destructuring de los métodos de productsController
const {getProducts, getProductsById, createProduct} = require("../controllers/productsController.js")

/* router.get("/compra", compra)
router.get("/venta", venta)
router.get("/:num", detalle) */

router.get("/products", getProducts)
router.get("/products/:id", getProductsById)
router.post("/products/create", createProduct)

module.exports = router;
