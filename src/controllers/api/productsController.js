const DB = require("../../database/models");
const Op = DB.Sequelize.Op;

const apiProductsController = {
    
    list: (req, res) => {

        DB.Productos.findAll()
            .then(productos => {
                return res.status(200).json({
                    total: productos.length,
                    data: productos,
                    status: 200
                })
            })
    },
    show: (req, res) => {

        DB.Productos.findByPk(req.params.id)
            .then(producto => {
                return res.status(200).json({
                    data: producto,
                    status: 200
            })
        })
    },
    store: (req, res) => {

        DB.Productos.create(req.body)
            .then(producto => {
                return res.status(200).json({
                    data: producto,
                    status: 200,
                    create: "ok"
            })
        })
    },
    delete: (req, res) => {

        DB.Productos.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(response => {
                return res.json({response})
        })
    },
    search: (req, res) => {

        DB.Productos.findAll({
            where: {
                name: {[Op.like]: "%" + req.query.keyword + "%" }
            }
        })
            .then(product => {
                if (product.length > 0){
                    return res.status(200).json({product})
                }
                return res.status(200).json("Lo sentimos, no tenemos este producto")
        })
    },
};

module.exports = apiProductsController;