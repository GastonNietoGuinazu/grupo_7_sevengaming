const DB = require("../../database/models");
const Op = DB.Sequelize.Op;

const apiUsersController = {
    
    list: (req, res) => {

        DB.Usuarios.findAll()
            .then(users => {
                return res.status(200).json({
                    total: users.length,
                    data: users,
                    status: 200
                })
            })
    },
    show: (req, res) => {

        DB.Usuarios.findByPk(req.params.id)
            .then(user => {
                return res.status(200).json({
                    data: user,
                    status: 200
            })
        })
    },
    store: (req, res) => {

        DB.Usuarios.create(req.body)
            .then(user => {
                return res.status(200).json({
                    data: user,
                    status: 200,
                    create: "ok"
            })
        })
    },
    delete: (req, res) => {

        DB.Usuarios.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(response => {
                return res.json({response})
        })
    },
    search: (req, res) => {

        DB.Usuarios.findAll({
            where: {
                name: {[Op.like]: "%" + req.query.keyword + "%" }
            }
        })
            .then(user => {
                if (user.length > 0){
                    return res.status(200).json({user})
                }
                return res.status(200).json("Lo sentimos, usuario no encontrado")
        })
    }
};

module.exports = apiUsersController;