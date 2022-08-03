const express = require("express");
const router = express.Router();

/********** Controller **********/
const productsController = require("../controllers/productsController.js");

/********* Middlewares **********/
const uploadFile = require("../middlewares/uploadFileEditProduct");

/********** Views **********/
router.get("/carrito", productsController.carrito); //Vista de la selección de compra
router.get("/listaProducto", productsController.productList); //Vista de la lista de productos
router.get("/detalle", productsController.productDetail); //Vista del detalle del producto
router.get("/detail/:id", productsController.detail); //Detalle del producto, una alternativa de la vista de detalle
router.get("/crearProducto", productsController.crearProducto); //Formulario de creación de productos
router.post("/crearProducto", productsController.store); //Crea y almacena el producto
router.get("/editarProducto",uploadFile.single("imagen1"), productsController.editProduct) //Formulario de edición de productos
router.post("/editarProducto/:id", productsController.edit); //Procesa la edición del producto
router.delete("/eliminar/:id", productsController.destroy); //Eliminación de un producto

module.exports = router;