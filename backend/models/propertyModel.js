const db = require("../config/database");

const getAllProperties = (callback) => {
    const sql = `
        SELECT *
        FROM properties
        ORDER BY created_at DESC
    `;

    db.query(sql, callback);
};

const getPropertyById = (id, callback) => {
    const sql = `
        SELECT *
        FROM properties
        WHERE id = ?
    `;

    db.query(sql, [id], callback);
};

module.exports = {
    getAllProperties,
    getPropertyById
};