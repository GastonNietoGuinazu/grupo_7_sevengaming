const express = require("express");
const router = express.Router();
const uploadFile = require('../app'); 

//Se realiza destructuring de los métodos de productsController
const {getProducts, getProductsById, createProduct} = require("../controllers/productsController");
const productsController = require("../controllers/productsController");

/* router.get("/compra", compra)
router.get("/venta", venta)
router.get("/:num", detalle) */

router.get("/products", getProducts)
router.get("/products/:id", getProductsById)
router.post("/products/create", createProduct)


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
