const express = require('express');
const app = express();
const path = require("path")
const methodOverride = require("method-override")
// Instalando express-session
const session = require('express-session');

/* const db = require("./database/database");

(async ()=> {
    try {
        await db.authenticate()
console.log('Conectados a la base de datos')
    } catch (error) {
        throw new Error(error)
    }
})();
 */
//similar a los recursos estaticos, es para evitar poner el path
app.set('views',path.resolve(__dirname,'views'));
//configuramos el motor de plantillas (EJS)
app.set('view engine','ejs')
//Usamos los recursos estaticos
app.use(express.static('public'));
//Para poder trabajar con los datos que envia el formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());
// Para poder usar los métodos PUT y DELETE
app.use(methodOverride('_method'));
// Utilizando middleware a nivel global de express-session
app.use(session({secret:'Secreto', resave: false, saveUninitialized: true,}));
//Error 404
//app.use((req,res,next) => res.status(404).render("No encontrado"));
// Cookies
//app.use(cookieParser());

//usando los enrutadores importados
const productsRouter = require("./routes/productsRouter.js")
const usersRouter = require("./routes/usersRouter.js")
const homeRouter = require("./routes/homeRouter.js");
/* const db = require('./database/database.js'); */

app.use("/productos", productsRouter);
app.use("/usuarios", usersRouter);
app.use("/", homeRouter);

app.listen(3012,()=>{
    console.log('servidor corriendo en http://localhost:3012');
});