const fs = require('fs');
const path = require('path');

//Path usuarios
const usersFilePath = path.join(__dirname, '../data/user.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController = {

    login: (req, res) => {
        res.send("Formulario de conexión")
    },

    register: (req, res) => {
        res.send("Formulario de creación")
    }
}

module.exports = usersController;