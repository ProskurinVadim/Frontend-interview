const { Schema, model } = require("mongoose");
const Joi = require("joi");

const tableSchema = Schema({
    label: {
        type: String,
        require: true,
        unique: true,
    },
    time: {
        type: Number,
    },
    price: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    },
    higlighted_text: {
        type: String,
        maxLength: 20,
    },
    src: {
        type: String,
    }
}, { versionKey: false })

const Table = model("table", tableSchema);

const add_table = Joi.object({
    label: Joi.string().required(),
    higlighted_text: Joi.string().max(20).optional().allow(''),
    time: Joi.number(),
    price: Joi.number(),
    description: Joi.string().optional().allow(''),
    file: Joi.any(),
});

module.exports = {
    Table,
    add_table
}