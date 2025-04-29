const express = require('express');

const router = express.Router();

const reportController = require("../controllers/reportController");

router.get("/pdf", reportController.exportHeroiPDF);

module.exports = router;
