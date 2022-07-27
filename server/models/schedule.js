const { Schema, model } = require("mongoose");
const Joi = require("joi");

const morningSchema = Schema({
    name: {
        type: String,
        require: true
    },
    tables: {
        type: Array
    }
}, { versionKey: false })

const afternoonSchema = Schema({
    name: {
        type: String,
        require: true
    },
    tables: {
        type: Array
    }
}, { versionKey: false })

const nightSchema = Schema({
    name: {
        type: String,
        require: true
    },
    tables: {
        type: Array
    }
}, { versionKey: false })

const Morning = model("morning", morningSchema);
const Afternoon = model("afternoon", afternoonSchema);
const Night = model("night", nightSchema);

const add_schedule = Joi.object({
    schedule: Joi.string().required(),
    presentor: Joi.object(),
});

module.exports = {
    Morning,
    Afternoon,
    Night,
    add_schedule,
}