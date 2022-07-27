const express = require("express");

const ctrl = require("../../controllers/table");

const { ctrlWrapper } = require("../../helpers");

const { authenticate, validation, isValidId, upload } = require("../../middlewares");

const { add_table } = require("../../models/table");


const router = express.Router();

router.post("/", validation(add_table), ctrlWrapper(ctrl.add));

router.get("/", ctrlWrapper(ctrl.getAll));

router.put("/:id", isValidId, validation(add_table), ctrlWrapper(ctrl.updateById));

router.delete("/:id", isValidId, ctrlWrapper(ctrl.removeById));

router.post("/image/:id", upload.single("image"), ctrlWrapper(ctrl.addImage));

module.exports = router;