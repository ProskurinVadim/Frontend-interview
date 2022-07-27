const express = require("express");

const ctrl = require("../../controllers/presentors");

const { ctrlWrapper } = require("../../helpers");

const { authenticate, validation, isValidId, upload } = require("../../middlewares");

const { add_presentor, reserv_presentor } = require("../../models/presentor");


const router = express.Router();

router.post("/", validation(add_presentor), ctrlWrapper(ctrl.add));

router.get("/", ctrlWrapper(ctrl.getAll));

router.put("/:id", isValidId, validation(add_presentor), ctrlWrapper(ctrl.updateById));

router.delete("/:id", isValidId, ctrlWrapper(ctrl.removeById));

router.post("/image/:id", upload.single("image"), ctrlWrapper(ctrl.addImage));

module.exports = router;