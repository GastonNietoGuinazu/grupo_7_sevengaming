function userLogued (req, res, next){
    res.locals.isLogued = false;
    if (req.session.usuarioLogueado){
        res.locals.isLogued = true;
        res.locals.usuarioLogueado = req.session.usuarioLogueado
    }

    next();
}

module.exports = userLogued;