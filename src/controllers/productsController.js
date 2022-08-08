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
    crearProducto: (req, res) => {
        res.render("crearProducto")
    },
    editProduct: (req, res) => {
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
    // Creación - Method de store
    store: (req, res) => {
        db.Productos.create({
            name: req.body.username,
            price: req.body.prc,
            categoryId: req.body.categotria,
            description: req.body.desripcion,
            image: req.body.imagen1,
        });
        res.redirect("/productos/productsList");
    },
    // Edición del producto
    editProduct: (req, res) => {
        let id = req.params.id
        db.Productos.findByPk(id)
            .then(product => {
                return res.render('modificarProducto', { product })
            });
    },
    edit: (req, res) => {
        let productId = req.params.id;
        db.Productos.update({
            name: req.body.name,
            price: req.body.price,
            categoryId: req.body.category,
            description: req.body.description
        }, {
            where: { id: productId }
        }) 
            .then(() => {
                return res.redirect("/productos/productsList");
            })
            .catch(error => res.send(error))  
    },
    list: (req, res) => {
        db.Productos.findAll()
            .then(products => {
                res.render('listaProductos.ejs', { products })
            })
    },
    //Alternativa del detalle de un producto
    detail: (req, res) => {
        db.Productos.findByPk(req.params.id)
            .then(product => {
                res.render('detalleProducto.ejs', { product });
            });
    },
    // Formulario eliminación
    delete: (req, res) => {
        let productID = req.params.id;
        db.Productos.findByPk(productID)
        .then(product => {
            res.render("productDeleted", {product});
        })
    },
    // Eliminar  
    destroy: (req, res) => {
        let id = req.params.id;
        db.Productos.destroy({
            where: { id: id }, forcer: true
        })
        .then(() => {
            return res.redirect("/productos/productsList");
        })
        .catch(error => res.send(error)) 
    },
}

module.exports = productsController;