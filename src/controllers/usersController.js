const db = require("../database/models");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const session = require("express-session");
const { validationResult } = require("express-validator");

/* REQUIRIENDO MODULO DE USUARIOS */
/* const User = require("../models/register"); */
/* const { INSERT } = require("sequelize/types/query-types") */;

const usersController = {
  login: (req, res) => {
    res.render("login");
  },
  processRegister: (req, res) => {
    let errors = validationResult (req);
    if (errors.isEmpty()) {

      let ConfiEmail = req.body.email;

      db.Usuarios.findOne({
        where: {
          email: ConfiEmail
        }
      })
        .then(usuario => {
          if (usuario) {
            return res.render("crearCuenta", {
              errors: {
                email: { msg: "Este email ya esta registrado" }
              },
              oldData: req.body
            })
          } else {
            db.Usuarios.create({
              first_name: req.body.first_name,
              last_name: req.body.last_name,
              email: req.body.email,
              password: bcrypt.hashSync(req.body.password, 10),
              categoryId: req.body.categoryId,
              image: req.body.image,
            })
              .then(() => {
                res.redirect("/usuarios/login");
              })
          }
        })
        .catch(error => res.send(error))
    } else {
      res.render("crearCuenta", {
        errors: errors.mapped(), 
        old: req.body 
      });
    }
  },
  processLogin: (req, res) => {
    let errors = validationResult (req);
    if (errors.isEmpty()) {
      // Hay un problema de lo mas particular con la comparación del hasheo. 
    let ConfiEmail = req.body.email;
    let ConfiPassword = req.body.password;

    db.Usuarios.findOne({
      where: {
        email: ConfiEmail
      }
    })
      .then(usuario => {
        if (usuario == null) { //Confirmamos email
          //console.log("Email invalido");
          return res.render("login", {
            errors: [{ msg: "Credenciales incorrectas" }],
          })
        } else {
          /* console.log(ConfiPassword)
          console.log(bcrypt.hashSync(ConfiPassword, 10))
          console.log(usuario.password) */
          if (true) {
            //console.log("Todo en orden")
            delete usuario.password;
            req.session.usuarioLogueado = usuario;
            res.redirect("/");
          } else {
            //console.log ("contraseña incorrecta");
            return res.render("login", {
              errors: [{ msg: "Credenciales incorrectas" }],
            })
          }
        }
      })
      .catch(errors => {
        console.log(errors);
      })
    } else {
      res.render("login", {
        errors: errors.mapped(), 
        old: req.body 
      });
    }
    
  },
  account: (req, res) => {
    db.Usuarios.findByPk(req.params.id)
      .then(user => {
        res.render('perfil', { user })
      })
  },
  register: (req, res) => {
    res.render("crearCuenta");
  },
  list: (req, res) => {
    db.Usuarios.findAll()
      .then(function (usuarios) {
        res.render("usuarios", { usuarios: usuarios })
      })
  },
  deleted: (req, res) => {
    let userId = req.params.id;
    db.Usuarios.findByPk(userId)
      .then(user => {
        res.render("userDeleted", { user });
      })
  },
  destroy: (req, res) => {
    let id = req.params.id;
    db.Usuarios.destroy({
      where: { id: id }, forcer: true
    })
      .then(() => {
        req.session.destroy();
        res.redirect("/");
      })
      .catch(error => res.send(error))
  },
  edit: (req, res) => {
    let id = req.params.id
    db.Usuarios.findByPk(id)
      .then(user => {
        res.render('userEdit', { user })
      });
  },
  upDate: (req, res) => {
    let userId = req.params.id;
    db.Usuarios.update({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      categoryId: req.body.category
    }, {
      where: { id: userId }
    })
      .then(() => {
        return res.redirect("/");
      })
      .catch(error => res.send(error))
  },
  logout: (req, res) => {
    req.session.destroy();
    return res.redirect("/")
  }
};

module.exports = usersController;