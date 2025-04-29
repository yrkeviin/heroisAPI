const express = require("express");
const router = express.Router();
const heroiController = require("../controllers/heroiController");
const upload = require("../config/upload");
const apiKeyMiddleware = require("../config/apiKey"); // 🔐

router.use(apiKeyMiddleware); // 🔒 Aplica para todas as rotas abaixo

router.get("/", heroiController.getAllHerois);
router.get("/:id", heroiController.getHeroi);
router.post("/", upload.single("photo"), heroiController.createHeroi);
router.put("/:id", heroiController.updateHeroi);
router.delete("/:id", heroiController.deleteHeroi);

module.exports = router;
