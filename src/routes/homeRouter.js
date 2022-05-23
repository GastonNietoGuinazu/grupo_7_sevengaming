const express = require("express");
const router = express.Router();

const homeController = require("../controllers/homeController.js")

router.get("/", homeController.home);
router.get("/login", homeController.login);
router.get("/producto", homeController.producto);
router.get("/cuenta", homeController.cuenta);
router.get("/carrito", homeController.carrito);
router.get("/productList", homeController.productList);
router.get("/productDetail", homeController.productDetail);
router.get("/crearProducto", homeController.crearProducto);
router.get("/modificarProducto", homeController.modificarProducto);

module.exports = router;