require("dotenv").config();
const express = require("express");
const cors = require("cors");
const heroiRoutes = require("./src/routes/heroiRoutes");
const editoraRoutes = require("./src/routes/editoraRoutes");
const reportRoutes = require("./src/routes/reportRoutes");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/doc", reportRoutes);
app.use("/api/herois", heroiRoutes);
app.use("/api/editoras", editoraRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
