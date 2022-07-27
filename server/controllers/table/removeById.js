const { createError } = require("../../helpers");

const { Table } = require("../../models/table");

const removeById = async (req, res) => {
    const { id } = req.params;
    const result = await Table.findByIdAndRemove(id);
    if (!result) {
        throw createError(404)
    }
    res.json({
        message: "Table delete"
    })
}

module.exports = removeById