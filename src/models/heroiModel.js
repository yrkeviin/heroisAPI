const pool = require("../config/database");

const getHerois = async (name) => {
    if(!name){
        const result = await pool.query("SELECT * FROM herois");
        return result.rows;
    }
    else{
        const result = await pool.query("SELECT * FROM herois WHERE name ILIKE $1", [`%${name}%`]);
        return result.rows;
    }
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

const createHeroi = async (name, editora_id, photo) => {
    const result = await pool.query(
        "INSERT INTO herois (name, editora_id, photo) VALUES ($1, $2, $3) RETURNING *",
        [name, editora_id, photo]
    );
    return result.rows[0];
};

const updateHeroi = async (id, name, editora_id) => {
    const result = await pool.query(
        "UPDATE herois SET name = $1, editora_id = $2 WHERE id = $3 RETURNING *",
        [name, editora_id, id]
    );
    return result.rows[0];
};

const deleteHeroi = async (id) => {
    await pool.query("DELETE FROM herois WHERE id = $1", [id]);
    return { message: "Heroi deletado" };
};

module.exports = { getHerois, getHeroiById, createHeroi, updateHeroi, deleteHeroi };
