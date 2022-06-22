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
router.get("/crearProducto", productsController.crearProducto); //Formulario de creación de productos
router.get("/modificarProducto", uploadFile.single("imagen1"),productsController.modificarProducto); //Formulario de edición de productos
router.get('/detail/:id', productsController.detail); //Detalle del producto 

/********** CRUD productos **********/
router.get('/edit/:id', productsController.edit); //Recibe la informacion para realizar la edición
router.patch("/edit/:id", productsController.update); // Procesa la edición
router.get('/create', productsController.create); //Recibe lainformacion para la creacion
router.post('/', productsController.store); //Crea y almacena el producto
router.delete('/delete/:id', productsController.destroy); //Eliminación de un producto

/*router.get("/products", getProducts)
router.get("/products/:id", getProductsById)
router.post("/products/create", createProduct)*/

module.exports = router;