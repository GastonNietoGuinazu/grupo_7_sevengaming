const fs = require('fs');
const path = require('path');

//Path usuarios
const usersFilePath = path.join(__dirname, '../data/user.json');
/*const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));*/

const usersController = {

    login: (req, res) => {
        res.render("login")
    },
    processLogin: function (req, res) {
let errors = validationResult(req);
if (errors.isEmpty()) {

} else {
    return res.render('/login', {errors:errors.errors})
}
    },
    account: (req, res) => {
        res.render("cuenta")
    },
    register: (req, res) => {
        res.send("Formulario de creación")
    }
}

module.exports = usersController;