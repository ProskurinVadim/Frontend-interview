const express = require("express");

const ctrl = require("../../controllers/auth");

const { ctrlWrapper } = require("../../helpers");

const { validation } = require("../../middlewares");

const { login } = require("../../models/user");

const router = express.Router();

// signup
router.post("/register", validation(login), ctrlWrapper(ctrl.register))

// signin
router.post("/login", validation(login), ctrlWrapper(ctrl.login));
module.exports = router;