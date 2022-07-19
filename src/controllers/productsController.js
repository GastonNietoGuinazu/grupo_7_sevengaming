const fs = require('fs');
const path = require('path');
const res = require('express/lib/response'); 
const db = require("../database/models");
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
    editProduct:(req, res) =>{
        res.render("modificarProducto")
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
        let productoId = req.params.id;
        res.send("Detalle del producto " + productoId);
    },
    // Creación - Formulario de creación
	create: (req, res) => {
		res.render('product-create')
	},
    // Creación - Method de store
	store: (req, res) => {
		db.Productos.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            image: req.body.image,
        });
        res.send("Producto agregado!!!");
	},
    // Edición - Formulario de edición
	edit: async (req, res) => {
		let id = req.params.id
        const productToEdit = await db.findOne({ where: { id: `${req.query.params}` } });
            if (productToEdit === null) {
            console.log('Not found!');
            } else {
            console.log(productToEdit.title); 
            }
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

module.exports = productsController;