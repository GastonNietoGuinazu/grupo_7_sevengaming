const express = require("express");
const router = express.Router();

const productsController = require("../../controllers/api/productsController")

router.get("/lista", productsController.list);
router.get("/buscar", productsController.search);
router.get("/:id", productsController.show);
router.post("/", productsController.store);
router.delete("/:id", productsController.delete);

module.exports = router;