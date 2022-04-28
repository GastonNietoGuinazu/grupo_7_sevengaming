const usersController = {

    login: (req, res) => {
        res.send("Formulario de conexión")
    },

    register: (req, res) => {
        res.send("Formulario de creación")
    }
}

module.exports = usersController;