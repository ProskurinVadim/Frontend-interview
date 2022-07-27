const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../../models/user");

const { createError } = require("../../helpers");

const { SECRET_KEY } = process.env;

const register = async (req, res) => {
    const { login, password } = req.body;
    const user = await User.findOne({ login });
    if (user) {
        throw createError(409, "Login in use");
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const result = await User.create({ ...req.body, password: hashPassword });
    const payload = {
        id: result._id
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "10h" });
    res.status(201).json({
        login: result.login,
        token
    })
}

module.exports = register