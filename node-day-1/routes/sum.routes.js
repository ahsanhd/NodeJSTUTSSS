const express = require('express');

const myMiddleWare = require("../middleware/auth.middleware");

const sumRouter = express.Router();

sumRouter.post('/sum', myMiddleWare, (req, res) => {

    const value = req.body;

    const {a, b} = value;

    if(a === undefined || b === undefined){
        return res.json({error: 'Body is incorrect a or b is missing'});
    }

    const sum = Number(a) + Number(b);

    res.json({sum}); // Sending JSON response with the sum to the client
})


module.exports = sumRouter;