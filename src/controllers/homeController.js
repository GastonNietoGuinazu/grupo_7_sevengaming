const path = require("path");

const homeController = {

    home: (req, res) => {
        res.render("home")
    },
    login: (req, res) => {
        res.render("login")
    },
    producto: (req, res) => {
        res.render("producto")
    },
    cuenta: (req, res) => {
        res.render("cuenta")
    },
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
    modificarProducto: (req, res) => {
        res.render("modificarProducto")
    },
}

module.exports = homeController;