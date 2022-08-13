const express = require("express");
const router = express.Router();

/********** Controller **********/
const productsController = require("../controllers/productsController.js");

/********* Middlewares **********/
const uploadFile = require("../middlewares/uploadFileEditProduct"); // Permite que se pueda recibir archivos
const validationsCreate = require("../middlewares/createValidations"); //Validaciones para el ccrear producto
const logout = require("../middlewares/authMiddleware"); // Para que el usuario no pueda acceser sino esta loguado

/********** Views **********/
router.get("/carrito", logout, productsController.carrito); //Vista de la selección de compra
router.get("/listaProducto", productsController.productList); //Vista de la lista de productos
router.get("/detalle", productsController.productDetail); //Vista del detalle del producto
router.get("/productsList", logout, productsController.list); //Lista de productos vista del admin
router.get("/detail/:id", logout, productsController.detail); //Detalle del producto vista del admin
router.get("/crearProducto", logout, productsController.crearProducto); //Formulario de creación de productos
router.post("/crearProducto", validationsCreate, productsController.store); //Crea y almacena el producto
router.get("/editarProducto/:id", logout, productsController.editProduct) //Formulario de edición de productos
router.post("/edit/:id", productsController.edit); //Procesa la edición del producto
router.get("/eliminar/:id", logout, productsController.delete); //Formulario de eliminación
router.post("/eliminar/:id", productsController.destroy); //Eliminación de un producto

module.exports = router;