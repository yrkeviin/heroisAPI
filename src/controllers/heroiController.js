const heroiModel = require("../models/heroiModel");

const getAllHerois = async (req, res) => {
    try {
        const {name} = req.query;
        const herois = await heroiModel.getHerois(name);
        res.json(herois);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar herois!" });
    }
}

const getHeroi = async (req, res) => {
    try {
        const heroi = await heroiModel.getHeroiById(req.params.id);
        if (!heroi) {
            return res.status(404).json({ message: "Heroi não encontrado." });
        }
        res.json(heroi);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar heroi!" });
    }
};

const createHeroi = async (req, res) => {
    try {
        const { name, editora_id } = req.body;
        const photo = req.file ? req.file.filename : null;
        const newHeroi = await heroiModel.createHeroi(name, editora_id, photo);
        res.status(201).json(newHeroi);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar heroi!" });
    }   
};

const updateHeroi = async (req, res) => {
    const { name, editora_id } = req.body;
    const updatedHeroi = await heroiModel.updateHeroi(req.params.id, name, editora_id);
    res.json(updatedHeroi);
};

const deleteHeroi = async (req, res) => {
    const message = await heroiModel.deleteHeroi(req.params.id);
    res.json(message);
};

module.exports = { getAllHerois, getHeroi, createHeroi, updateHeroi, deleteHeroi };
