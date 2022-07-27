const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = Schema({
    login: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    token: {
        type: String,
        default: ""
    }
}, { versionKey: false, timestamps: true });

const User = model("user", userSchema);

const login = Joi.object({
    login: Joi.string().required(),
    password: Joi.string().min(6).required()
});

module.exports = {
    User,
    login
}