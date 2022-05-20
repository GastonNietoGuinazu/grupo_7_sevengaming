const uploadFile = require('../app')
const fs = require('fs');
const path = require('path');
const res = require('express/lib/response');


//Path productos
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {

    compra: (req, res) => {
        res.send("Compra exitosa")
    },

    venta: (req, res) => {
        res.send("Venta exitosa")
    },

    detalle: (req, res) => {
        let productoId = req.params.num;
        res.send("Detalle del producto " + productoId);
    },

}

const getProducts = (req, res) => {
    return res.json(products)
}

const getProductsById = (req, res) => {
    let id = req.params.id;
    let filter =  products.filter(product => product.id == id);
    return res.json(filter)
}

const createProduct = (req, res) => {
    let body = req.body
    
}

module.exports = {
    getProducts,
    getProductsById,
    createProduct
};