const { Presentor } = require("../../models/presentor");

const getAll = async (req, res) => {
    const result = await Presentor.find({ })
    res.json(result);
}

module.exports = getAll;