const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');


//Controller
const productsController = require("../controllers/productsController");

//Middlewares
const uploadFile = require("../middlewares/uploadFileEditProduct");
//Se realiza destructuring de los métodos de productsController
/*const {getProducts, getProductsById, createProduct} = require("../controllers/productsController");*/
/* router.get("/compra", compra)
router.get("/venta", venta)
router.get("/:num", detalle) */
router.get("/carrito", productsController.carrito); //Vista de la selección de compra
router.get("/productList", productsController.productList); //Vista lista de productos
router.get("/productDetail", productsController.productDetail); //Vista detalle del producto 
router.get("/crearProducto", productsController.crearProducto); //Formulario de creación de productos
router.get("/modificarProducto", uploadFile.single("imagen1"),productsController.modificarProducto); //Formulario de edición de productos
router.put("/modificarProducto/:id", productsController.modificarProducto); // Procesa la edición 

/*router.get("/products", getProducts)
router.get("/products/:id", getProductsById)
router.post("/products/create", createProduct)*/

/*** Creación de producto ***/ 
/*router.get('/create', productsController.create); 
router.post('/', productsController.store);*/

/*** GET Detalle del producto ***/ 
//router.get('/detail/:id', productsController.detail); 

/*** Edición de un producto ***/ 
/*router.get('/edit/:id', productsController.edit); 
router.patch('/edit/:id', productsController.update);*/

/*** Eliminación de un producto ***/ 
//router.delete('/delete/:id', productsController.destroy);

module.exports = router;
