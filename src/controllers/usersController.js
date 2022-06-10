const fs = require("fs");
const path = require("path");
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');   
/* EXPORTANDO MODULO DE USUARIOS */
/* const User = require('../models.User'); */

//Path usuarios
const usersFilePath = path.join(__dirname, "../data/user.json");
/*const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));*/

const usersController = {

  login: (req, res) => {
    console.log(req.body);
    
    res.render("login");
  },
  processLogin: function (req, res) {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
        let usersJson = fs.readFileSync('user.json', { errors: errors.errors })
        let users;
        if(usersJson == "") {
            users = [];
        } else {
            users = JSON.parse(usersJson);
        }

        for (let i = 0; i < users.length; i++) {
           if(users[i].email == req.body.email) {
            if(bcrypt.compareSync(req.body.password, users[i].password)) {
                let usuarioLoguear = users[i];
                break;
            }
           }

           if(usuarioLoguear == undefined) {
            return res.render('login', {errors: [
                { msg: "Credenciales incorrectas"}
            ]})
           }
            
        }
        req.session.usuarioLogueado = usuarioLoguear;
    } else {
      return res.render("login", { errors: errors.errors });
    }
  },
  account: (req, res) => {
    res.render("cuenta");
  },
  register: (req, res) => {
    res.render("cuenta");
  },
};

module.exports = usersController;
