const express = require("express");
const router = express.Router();
const uploadFile = require('../app')


const productsController = require("../controllers/productsController.js")

router.get("/compra", productsController.compra)
router.get("/venta", productsController.venta)
router.get("/:num", productsController.detalle)

module.exports = router;