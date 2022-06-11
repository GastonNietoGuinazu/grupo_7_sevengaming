const multer = require("multer");
const path = require("path");

//Definimos donde subir y guardar el archivo
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const folder = './public/images/imagesProducts';
        cb(null, folder);
    },
    filename: function(req, file, cb) {
        const imageName = file.fieldname +`${Date.now()}_img_${path.extname(file.originalname)}`;
        cb(null, imageName);
    }
});

const uploadFile = multer({storage:storage});

module.exports = uploadFile;