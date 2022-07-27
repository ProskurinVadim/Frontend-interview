const mongoose = require("mongoose");

const app = require('./app')

const { DB_HOST, PORT = 80 } = process.env;

console.log(DB_HOST)
mongoose.connect(DB_HOST)
    .then(() => app.listen(PORT))
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    })
