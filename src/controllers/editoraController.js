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

const createEditora = async (req, res) => {
    try {
        const novaEditora = await editoraModel.createEditora(req.body.name);
        res.status(201).json(novaEditora);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar editora!" });
    }
};

const updateEditora = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, photo } = req.body;

        // Atualiza a editora no banco de dados
        const updatedEditora = await editoraModel.updateEditora(id, name, photo);

        if (!updatedEditora) {
            return res.status(404).json({ message: "Editora não encontrada." });
        }

        res.json(updatedEditora);
    } catch (error) {
        console.error("Erro ao atualizar editora:", error);
        res.status(500).json({ message: "Erro ao atualizar editora." });
    }
};

const deleteEditora = async (req, res) => {
    try {
        const editoraDeletada = await editoraModel.deleteEditora(req.params.id);
        if (!editoraDeletada) {
            return res.status(404).json({ message: "Editora não encontrada!" });
        }
        res.json({ message: "Editora deletada com sucesso!" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar editora!" });
    }
};

module.exports = { getAllEditoras, getEditora, createEditora, updateEditora, deleteEditora };
