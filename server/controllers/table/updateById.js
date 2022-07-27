const { createError } = require("../../helpers");

const { Table } = require("../../models/table");

const updateById = async (req, res) => {
    const { id } = req.params;
    const result = await Table.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
        throw createError(404);
    }
    res.json(result);
}

module.exports = updateById;