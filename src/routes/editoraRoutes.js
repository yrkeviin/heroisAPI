const express = require("express");
const router = express.Router();
const editoraController = require("../controllers/editoraController");
const apiKeyMiddleware = require("../config/apiKey");

router.use(apiKeyMiddleware); // 🔒 Protege todas as rotas
router.get("/", editoraController.getAllEditoras);
router.get("/:id", editoraController.getEditora);
router.post("/", editoraController.createEditora);
router.put("/:id", editoraController.updateEditora);
router.delete("/:id", editoraController.deleteEditora);

module.exports = router;
