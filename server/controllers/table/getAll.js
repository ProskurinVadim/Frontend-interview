const { Table } = require("../../models/table");

const getAll = async (req, res) => {
    const result = await Table.find({ })
    res.json(result);
}

module.exports = getAll;