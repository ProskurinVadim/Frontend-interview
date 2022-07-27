const { Morning, Afternoon, Night, } = require("../../models/schedule");

const getAll = async (req, res) => {
    const morning = await Morning.find({})
    const afternoon = await Afternoon.find({})
    const night = await Night.find({})
    const result = { morning, afternoon, night}
    res.json(result);
}

module.exports = getAll;