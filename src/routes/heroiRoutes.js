const express = require("express");
const router = express.Router();
const heroiController = require("../controllers/heroiController");

router.get("/", heroiController.getAllHerois);
router.get("/:id", heroiController.getHeroi);
router.post("/", heroiController.createHeroi);

module.exports = router;
