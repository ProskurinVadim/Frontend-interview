
const { Morning, Afternoon, Night, } = require("../../models/schedule");

const models = { "morning": Morning, "afternoon": Afternoon, "night": Night };

const getAll = async (req, res) => {
    const hours = (new Date()).getHours();
    const schedule = (hours <= 23 && hours > 16) ? "afternoon" : (hours <= 15 && hours > 8) ? "morning" : "night";
    const Schema = models[schedule]
    const presentors = await Schema.find({})
    const result = presentors.map(presentor => presentor.tables.filter(table => table.time === hours)).flat();
    res.json(result);
}

module.exports = getAll;