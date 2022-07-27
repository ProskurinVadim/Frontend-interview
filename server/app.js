const express = require('express');
const logger = require('morgan')
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config();

const authRouter = require("./routers/api/auth");
const tableRouter = require("./routers/api/table");
const presenterRouter = require("./routers/api/presentor");
const scheduleRouter = require("./routers/api/schedule");

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter);
app.use("/api/table", tableRouter);
app.use("/api/presentor", presenterRouter);
app.use("/api/schedule", scheduleRouter);

app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
})

app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
})

module.exports = app
