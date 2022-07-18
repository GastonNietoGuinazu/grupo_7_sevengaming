const express = require("express");
const router = express.Router();

/********** Controller **********/
const productsController = require("../controllers/productsController");

/********* Middlewares **********/
const uploadFile = require("../middlewares/uploadFileEditProduct");

/********** Views **********/
router.get("/carrito", productsController.carrito); //Vista de la selección de compra
router.get("/productList", productsController.productList); //Vista lista de productos
router.get("/productDetail", productsController.productDetail); //Vista detalle del producto
router.get("/modificarProducto", productsController.editProduct) //Vista del modificador de productos
router.get("/crearProducto", productsController.crearProducto); //Vista del formulario de creación de productos
router.post('/crearProducto', productsController.store); //Crea y almacena el producto
router.get('/edit/:id',uploadFile.single("imagen1"), productsController.edit); //Formulario de edición de productos
router.get('/detail/:id', productsController.detail); //Detalle del producto 

/********** CRUD productos **********/
router.put("/edit/:id", productsController.update); // Procesa la edición
router.get('/create', productsController.create); //Recibe la informacion para la creacion

router.delete('/delete/:id', productsController.destroy); //Eliminación de un producto

module.exports = router;