const express = require('express');
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const session = require('express-session'); // Instalando express-session

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
app.set('views',path.resolve(__dirname,'views')); // Similar a los recursos estaticos, es para evitar poner el path
app.set('view engine','ejs'); //Configuramos el motor de plantillas (EJS)
app.use(express.static('public')); // Usamos los recursos estaticos
app.use(express.urlencoded({extended:false})); // Para poder trabajar con los datos que envia el formulario
app.use(express.json());
app.use(methodOverride('_method')); // Para poder usar los métodos PUT y DELETE
app.use(session({secret:'Secreto', resave: false, saveUninitialized: true,})); // Utilizando middleware a nivel global de express-session
//app.use((req,res,next) => res.status(404).render("No encontrado")); // Error 404
//app.use(cookieParser()); // Cookies

/********** Routers importados **********/
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