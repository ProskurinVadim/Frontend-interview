const validation = require("./validation");
const authenticate = require("./authenticate");
const upload = require("./upload");
const isValidId = require("./isValidId");

module.exports = {
    validation,
    authenticate,
    isValidId,
    upload,
}