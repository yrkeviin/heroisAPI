const pool = require("../config/database");

const getEditoras = async () => {
    const result = await pool.query("SELECT * FROM editoras");
    return result.rows;
};

const getEditoraById = async (id) => {
    const result = await pool.query("SELECT * FROM editoras WHERE id = $1", [id]);
    return result.rows[0];
};

module.exports = { getEditoras, getEditoraById };
