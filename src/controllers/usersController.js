const db = require("../database/models");
const fs = require("fs");
const path = require("path");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const usersFilePath = path.join(__dirname, "../data/user.json"); //Path usuarios
/*const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));*/
/* REQUIRIENDO MODULO DE USUARIOS */
/* const User = require('../models/User'); */
const register = require("../models/register");

const usersController = {
  login: (req, res) => {
    res.render("login");
  },
  processRegister: (req, res) => {
    const resultValidations = validationResult(req);
    if (resultValidations.errors.length > 0) {
      return res.render("crearCuenta", {
        errors: resultValidations.mapped(),
        oldData: req.body
      })
    }
    let userInDB = register.findByField("email", req.body.email);
    if (userInDB) {
      return res.render("crearCuenta", {
        errors: {
          email: { msg: "Este email ya esta registrado" }
        },
        oldData: req.body
      })
    }
    let userToCreate = {
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 10),
    }
    let userCreated = register.create(userToCreate);
    return res.redirect("/usuarios/login");
  },
  processLogin: function (req, res) {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
      let usuarioLoguear;
      for (let i = 0; i < users.length; i++) {
        if (users[i].email == req.body.email) {
          if /* (bcrypt.compareSync(req.body.password, users[i].password)) */(req.body.password == users[i].password) {
            usuarioLoguear = users[i];
          }
        }
      }
      if (usuarioLoguear == undefined) {
        return res.render("login", {
          errors: [{ msg: "Credenciales incorrectas" }],
        });
      }
      req.session.usuarioLogueado = usuarioLoguear;
      res.redirect("/");
    } else {
      return res.render("login", { errors: errors.errors });
    }
  },
  account: (req, res) => {
    res.render("cuenta");
  },
  register: (req, res) => {
    res.render("crearCuenta");
  },
  list: (req, res) => {
    db.Usuarios.findAll()
    .then(function(usuarios) {
      console.log(usuarios, "TODOS LOS USUARIOS")
      res.render("usuarios", {usuarios:usuarios})
    })
  },
  profile: (req, res) => {
    db.Usuarios.findByPk(req.params.id)
    .then(function(usuario) {
      res.render("cuenta", {usuario:usuario} )
    })
  }
};

module.exports = usersController;