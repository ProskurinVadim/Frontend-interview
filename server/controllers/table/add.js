const { Table } = require("../../models/table");

const add = async (req, res) => {
    
    const result = await Table.create({ ...req.body });
    res.status(201).json(result);

}

module.exports = add;