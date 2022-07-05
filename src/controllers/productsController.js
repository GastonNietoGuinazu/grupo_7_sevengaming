const fs = require('fs');
const path = require('path');
const res = require('express/lib/response'); 

//Path productos
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {

    carrito: (req, res) => {
        res.render("carrito")
    },
    productList: (req, res) => {
        res.render("productList")
    },
    productDetail: (req, res) => {
        res.render("productDetail")
    },
    crearProducto: (req, res) => {
        res.render("crearProducto")
    },
    // Compra
    buy: (req, res) => {
        res.send("Compra exitosa")
    },
    // Venta
    sell: (req, res) => {
        res.send("Venta exitosa")
    },
    // Detalle
    detail: (req, res) => {
        let productoId = req.params.num;
        res.send("Detalle del producto " + productoId);
    },
    // Creación - Formulario de creación
	create: (req, res) => {
		res.render('product-create')
	},
    // Creación - Method de store
	store: (req, res) => {
		res.send("Producto nuevo agregado");
	},
    // Edición - Formulario de edición
	edit: (req, res) => {
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		res.render('ModificarProducto', {productToEdit})
	},
    // Edición - Method de update
	update: (req, res) => {
		let id = req.params.id
		res.send("Producto con id " + id + " editado");
	},

	// Eliminar  
	destroy : (req, res) => {
		let id = req.params.id;
		res.send("Producto con id " + id + " eliminado");
	}
}
/*const getProducts = (req, res) => {
    return res.json(products)
}
const getProductsById = (req, res) => {
    let id = req.params.id;
    let filter =  products.filter(product => product.id == id);
    return res.json(filter)
}
const createProduct = (req, res) => {
    let body = req.body
    
}*/

module.exports = productsController;