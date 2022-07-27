const { Morning, Afternoon, Night, } = require("../../models/schedule");

const models = { "morning": Morning, "afternoon": Afternoon, "night": Night };

const { createError } = require("../../helpers");

const add = async (req, res) => {
    const { schedule, presentor } = req.body;
    const { name } = presentor;

    const Schema = models[schedule];
    const presentors = await Schema.findOne({ name });

    if (presentors) {
        throw createError(409, "Already seted");
    }
    const result = await Schema.create({ ...req.body.presentor });
    res.status(201).json(result);
}

module.exports = add;