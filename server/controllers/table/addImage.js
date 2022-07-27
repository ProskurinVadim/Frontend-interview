const { Table } = require("../../models/table");

const path = require("path");
const fs = require("fs/promises");

const addImage = async (req, res) => {
    const { path: tempDir, originalname } = req.file;
    const { id } = req.params;
    console.log(id)

    const dir = path.join(__dirname, "../../public", "image");
    const resultDir = path.join(dir, originalname)

    await fs.rename(tempDir, resultDir);

    const src = "http://localhost:80/" + path.join("image", originalname);
    const result = await Table.findByIdAndUpdate(id, { src }, { new: true });
    res.status(201).json(result);

}


module.exports = addImage;