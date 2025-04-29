const express = require("express");
const router = express.Router();
const heroiController = require("../controllers/heroiController");

router.get("/", heroiController.getAllHerois);
router.get("/:id", heroiController.getHeroi);
router.post("/", heroiController.createHeroi);
router.put("/:id", heroiController.updateHeroi);
router.delete("/:id", heroiController.deleteHeroi);

module.exports = router;
