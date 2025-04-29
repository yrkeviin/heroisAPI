const editoraModel = require("../models/editoraModel");

const getAllEditoras = async (req, res) => {
    try {
        const editoras = await editoraModel.getEditoras();
        res.json(editoras);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar editoras!" });
    }
};

const getEditora = async (req, res) => {
    try {
        const editora = await editoraModel.getEditoraById(req.params.id);
        if (!editora) {
            return res.status(404).json({ message: "Editora não encontrada!" });
        }
        res.json(editora);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar editora!" });
    }
};

module.exports = { getAllEditoras, getEditora };
