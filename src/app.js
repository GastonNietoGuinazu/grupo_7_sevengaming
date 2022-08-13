const express = require('express');
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const session = require('express-session'); // Instalando express-session
const error404 = require("./middlewares/error404");
const cookies = require("cookie-parser");
const userLoggedMidleware = require("./middlewares/userLoggedMiddleware");

app.set('views',path.resolve(__dirname,'views')); // Similar a los recursos estaticos, es para evitar poner el path
app.set('view engine','ejs'); //Configuramos el motor de plantillas (EJS)
app.use(express.static('public')); // Usamos los recursos estaticos
app.use(express.urlencoded({extended:false})); // Para poder trabajar con los datos que envia el formulario
app.use(express.json());
app.use(methodOverride('_method')); //Para poder usar los métodos PUT y DELETE
app.use(session({secret:'Secreto', resave: false, saveUninitialized: true,})); //Utilizando middleware a nivel global de express-session
app.use(cookies()); //Información que se guarda del lado del cliente
app.use(userLoggedMidleware); //Middleware de aplicación

/********** Routers importados **********/

const productsRouter = require("./routes/productsRouter.js")
const usersRouter = require("./routes/usersRouter.js")
const homeRouter = require("./routes/homeRouter.js");

app.use("/productos", productsRouter);
app.use("/usuarios", usersRouter);
app.use("/", homeRouter);
app.use(error404);

app.listen(3012,()=>{
    console.log('servidor corriendo en http://localhost:3012');
});