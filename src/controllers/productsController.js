const fs = require('fs');
const path = require('path');
//const res = require('express/lib/response'); 
const db = require("../database/models");
//Path productos
/* const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */

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
    /* crearProducto: (req, res) => {
        res.render("crearProducto")
    }, */
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
		/* db.Productos.create({
            name: req.body.username,
            price: req.body.prc,
            categoryId: req.body.categotria,
            description: req.body.desripcion,
            image: req.body.imagen1,
        }); */
        //res.send("Producto agregado!!!");
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
        db.Productos.destroy({
            where: {id:id}
        });
		res.send("Producto con id " + id + " eliminado");
	},
    add: (req,res) => {
        res.render("formCreateProduct");
    },
    createProduct: (req,res) => {
        console.log(req.body);
    }
}

module.exports = productsController;