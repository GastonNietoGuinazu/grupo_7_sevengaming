const db = require("../database/models");
const fs = require("fs");
const path = require("path");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const usersFilePath = path.join(__dirname, "../data/user.json"); //Path usuarios

/* REQUIRIENDO MODULO DE USUARIOS */
const User = require("../models/register");
/* const { INSERT } = require("sequelize/types/query-types") */;

const usersController = {
  login: (req, res) => {
    res.render("login");
  },
  processRegister: (req, res) => {
    db.Usuarios.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      categoryId: req.body.categoryId,
      image: req.body.image,
    })
      .then(() => {
        res.redirect("/usuarios/login");
      })
      .catch(error => res.send(error))
  },
  processLogin:(req, res) => {
  let errors = validationResult(req);
    if (errors.isEmpty()) {
      let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
      let usuarioLoguear;
      for (let i = 0; i < users.length; i++) {
        if (users[i].email == req.body.email) {
          let okPassword = bcrypt.compareSync(req.body.password, users[i].password);
          if (okPassword) {
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
      .then(function (usuarios) {
        console.log(usuarios, "TODOS LOS USUARIOS")
        res.render("usuarios", { usuarios: usuarios })
      })
  },
  profile: (req, res) => {
    db.Usuarios.findByPk(req.params.id)
      .then(function (usuario) {
        res.render("cuenta", { usuario: usuario })
      })
  },
  formUser:(req,res) => {
    res.render("modificarUsuario");
  },
  edit:(req,res) => {
    
  },
  logout: (req, res) => {
    req.session.destroy
    return res.redirect("/")
  }
};

module.exports = usersController;