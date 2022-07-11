const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require("../database/models");

const homeController = {

    home: async (req, res) => {
        let allUsers = await db.Productos.findAll()
        res.send(allUsers)
        /* res.render("home",{products: products}) */

    },    
};

module.exports = homeController;