const db = require("../database/models");
const fs = require("fs");
const path = require("path");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
//const usersFilePath = path.join(__dirname, "../data/user.json"); //Path usuarios

/* REQUIRIENDO MODULO DE USUARIOS */
/* const User = require("../models/register"); */
/* const { INSERT } = require("sequelize/types/query-types") */;

const usersController = {
  login: (req, res) => {
    res.render("login");
  },
  processRegister: (req, res) => {
    let ConfiEmail = req.body.email;

    /* db.Usuarios.findOne({
      where:{
        email:{ConfiEmail}
      }
    })
    .then(usuario =>{
      if (!usuario == null) {
        return res.render("crearCuenta", {
          errors: {
            email: { msg: "Este email ya esta registrado" }
          },
          oldData: req.body
        })
      } */
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
    //})
    .catch(error => res.send(error))
  },
  processLogin:(req, res) => {
    let ConfiEmail = req.body.email;
    let ConfiPassword = req.body.password;
    let usuarioLogueado;

      db.Usuarios.findOne({
        where:{
          email: {ConfiEmail}
        }
      })
      .then(usuario => {
          if (usuario == null) { //Confirmamos email
            return res.render("login", {
              errors: [{ msg: "Credenciales incorrectas" }],
            })
          } else {
            if (bcrypt.compareSync(ConfiPassword, usuario.password)){
              req.session.resultado = usuarioLogueado;
              res.redirect("/");
            } else {
              return res.render("login", {
                errors: [{ msg: "Credenciales incorrectas" }],
              })
            }
          }
      })
      .catch(errors => {
        res.render("login", { errors: errors.errors });
      })
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