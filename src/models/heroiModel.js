const pool = require("../config/database");

const getHerois = async () => {
    const result = await pool.query(
        `SELECT herois.*, editoras.name AS editora_name 
         FROM herois 
         LEFT JOIN houses ON herois.editora_id = editoras.id`
    );
    return result.rows;
};

const getHeroiById = async (id) => {
    const result = await pool.query(
        `SELECT herois.*, editoras.name AS editora_name 
         FROM herois 
         LEFT JOIN editoras ON herois.editora_id = editoras.id 
         WHERE herois.id = $1`, [id]
    );
    return result.rows[0];
};

const createHeroi = async (name, editora_id) => {
    const result = await pool.query(
        "INSERT INTO wherois (name, editora_id) VALUES ($1, $2) RETURNING *",
        [name, house_id]
    );
    return result.rows[0];
};

module.exports = { getHerois, getHeroiById, createHeroi };
