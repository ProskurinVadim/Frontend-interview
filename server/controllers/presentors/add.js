const { Presentor } = require("../../models/presentor");

const add = async (req, res) => {
    
    const result = await Presentor.create({ ...req.body });
    res.status(201).json(result);

}

module.exports = add;