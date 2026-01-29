const express = require('express');
const loggerMiddleware = require('./middleware/logger.middleware');
const helloRouter = require('./routes/hell.routes');
const sumRouter = require('./routes/sum.routes');
const app = express();
 const port = 3000;

app.use(express.json());
app.use(loggerMiddleware);

app.use('/', sumRouter);
app.use('/', helloRouter)

module.exports = {app, port};