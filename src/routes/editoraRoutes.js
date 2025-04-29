const express = require("express");
const router = express.Router();
const editoraController = require("../controllers/editoraController");

router.get("/", editoraController.getAllEditoras);
router.get("/:id", editoraController.getEditora);

module.exports = router;
