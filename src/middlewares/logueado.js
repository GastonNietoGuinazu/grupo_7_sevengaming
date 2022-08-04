function logueado (req, res, next){
    if (req.session.usuarioLogueado) {
        return res.redirect("/productos/productsList");
    }
    next();
}

module.exports = logueado;