const express = require("express");
const router = express.Router();

const usersController = require("../../controllers/api/usersController")

router.get("/lista", usersController.list);
router.get("/buscar", usersController.search);
router.get("/:id", usersController.show);
router.post("/", usersController.store);
router.delete("/:id", usersController.delete);

module.exports = router;