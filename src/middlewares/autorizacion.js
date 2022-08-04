function autorizacion (req, res, next){
    if (!req.session.usuarioLogueado) {
        return res.redirect("/usuarios/login");
    }
    next();
}

module.exports = autorizacion;