const { createError } = require("../../helpers");

const { Presentor } = require("../../models/presentor");

const updateById = async (req, res) => {
    const { id } = req.params;
    const result = await Presentor.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
        throw createError(404);
    }
    res.json(result);
}

module.exports = updateById;