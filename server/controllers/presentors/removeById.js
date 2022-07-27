const { createError } = require("../../helpers");

const { Presentor } = require("../../models/presentor");

const removeById = async (req, res) => {
    const { id } = req.params;
    const result = await Presentor.findByIdAndRemove(id);
    if (!result) {
        throw createError(404)
    }
    res.json({
        message: "Table delete"
    })
}

module.exports = removeById