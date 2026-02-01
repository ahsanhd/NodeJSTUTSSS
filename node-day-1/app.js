const express = require("express");
const loggerMiddleware = require("./middleware/logger.middleware");
const helloRouter = require("./routes/hell.routes");
const sumRouter = require("./routes/sum.routes");
const errorMiddleware = require("./middleware/error.middleware");

const app = express();
const port = 3000;

app.use(express.json());
app.use(loggerMiddleware);
app.use(errorMiddleware);
app.use("/", sumRouter);
app.use("/", helloRouter);

app.use(errorMiddleware);

/* linked with my work Laptop */

module.exports = { app, port };
