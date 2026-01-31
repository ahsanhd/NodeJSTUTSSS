
const express = require('express');

const helloRouter = express.Router();

helloRouter.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

module.exports = helloRouter;