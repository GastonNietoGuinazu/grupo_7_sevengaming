const db = require("../database/models");
const fs = require("fs");
const path = require("path");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

/* REQUIRIENDO MODULO DE USUARIOS */
/* const User = require("../models/register"); */
/* const { INSERT } = require("sequelize/types/query-types") */;

const usersController = {
  login: (req, res) => {
    res.render("login");
  },
  processRegister: (req, res) => {
    let ConfiEmail = req.body.email;

    db.Usuarios.findOne({
      where:{
        email: ConfiEmail
      }
    })
    .then(usuario =>{
      if (usuario) {
        return res.render("crearCuenta", {
          errors: {
            email: { msg: "Este email ya esta registrado" }
          },
          oldData: req.body
        })
      } else{
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
  },
  processLogin:(req, res) => {
    // Hay un problema de lo mas particular con la comparación del hasheo. 
    let ConfiEmail = req.body.email;
    let ConfiPassword = req.body.password;

      db.Usuarios.findOne({
        where:{
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
            if (true){
              //console.log("Todo en orden")
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
        console.log( errors );
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