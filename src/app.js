const express = require('express');
const app = express();
const path = require("path")
const methodOverride = require("method-override")
const multer = require('multer');

//MULTER
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/images/avatars');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
})

const uploadFile = multer({ storage })
module.exports = uploadFile;


//similar a los recursos estaticos, es para evitar poner el path
app.set('views',path.resolve(__dirname,'views'));
//configuramos el motor de plantillas (EJS)
app.set('view engine','ejs')
//Usamos los recursos estaticos
app.use(express.static('public'));
// Para poder usar los métodos PUT y DELETE
app.use(methodOverride('_method'));

//usando los enrutadores importados
const productsRouter = require("./routes/productsRouter.js")
const usersRouter = require("./routes/usersRouter.js")
const homeRouter = require("./routes/homeRouter.js")

app.use("/productos", productsRouter);
app.use("/usuarios", usersRouter);
app.use("/", homeRouter);

app.listen(3012,()=>{
    console.log('servidor corriendo en http://localhost:3012');
});