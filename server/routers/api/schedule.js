const express = require("express");

const ctrl = require("../../controllers/schedule");

const { ctrlWrapper } = require("../../helpers");

const { authenticate, validation, isValidId, upload } = require("../../middlewares");

const { add_schedule, update_schedule } = require("../../models/schedule");


const router = express.Router();

router.post("/", validation(add_schedule), ctrlWrapper(ctrl.add));

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/current", ctrlWrapper(ctrl.getCurrent));

router.put("/:id", isValidId, ctrlWrapper(ctrl.updateById));

module.exports = router;