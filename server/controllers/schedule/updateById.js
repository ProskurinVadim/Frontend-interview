const { Morning, Afternoon, Night, } = require("../../models/schedule");

const models = { "morning": Morning, "afternoon": Afternoon, "night": Night };

const { createError } = require("../../helpers");


const updateById = async (req, res) => {
    const { schedule, ...presentor } = req.body;
    const { id } = req.params;

    const Schema = models[schedule];

    const result = await Schema.findByIdAndUpdate(id, { ...presentor }, { new: true });

    if (!result) {
        throw createError(404);
    }
    res.json(result);
}

module.exports = updateById;