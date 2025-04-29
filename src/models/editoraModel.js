const pool = require("../config/database");

const getEditoras = async () => {
    const result = await pool.query("SELECT * FROM editoras");
    return result.rows;
};

const getEditoraById = async (id) => {
    const result = await pool.query("SELECT * FROM editoras WHERE id = $1", [id]);
    return result.rows[0];
};

const createEditora = async (name) => {
    const result = await pool.query(
        "INSERT INTO editoras (name) VALUES ($1) RETURNING *",
        [name]
    );
    return result.rows[0];
};

const updateEditora = async (id, name) => {
    const result = await pool.query(
        "UPDATE editoras SET name = $1 WHERE id = $2 RETURNING *",
        [name, id]
    );
    return result.rows[0];
};

const deleteEditora = async (id) => {
    const result = await pool.query("DELETE FROM editoras WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};
module.exports = { getEditoras, getEditoraById, createEditora, updateEditora, deleteEditora };
