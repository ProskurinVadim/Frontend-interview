const { createError } = require("../../helpers");

const { Presentor } = require("../../models/presentor");

const updateFavorite = async (req, res) => {
    const { id } = req.params;
    const result = await Presentor.findByIdAndUpdate(id, req.body, { reserv: req.reserv });
    if (!result) {
        throw createError(404);
    }
    res.json(result);
}

module.exports = updateFavorite;