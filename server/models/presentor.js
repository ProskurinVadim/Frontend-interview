const { Schema, model } = require("mongoose");
const Joi = require("joi");

const presentorSchema = Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    },
    src: {
        data: Buffer,
        contentType: String,
    },
    reserv: {
        type: Boolean
    }
}, { versionKey: false })

const Presentor = model("presentor", presentorSchema);

const add_presentor = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().optional().allow(''),
    src : Joi.any(),
    reserv: Joi.boolean()
});

const reserv_presentor = Joi.object({
    reserv: Joi.boolean().required()
})

module.exports = {
    Presentor,
    add_presentor,
    reserv_presentor
}