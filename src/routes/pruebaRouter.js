const express = require("express");
const router = express.Router();

const pruebaController = require("../controllers/pruebaController.js");

router.get ("/crearProducto",pruebaController.add);
router.post ("/crearProducto",pruebaController.formCreate);

module.exports = router;