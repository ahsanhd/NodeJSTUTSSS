const express = require('express');

const myMiddleWare = require("../middleware/auth.middleware");

const sumRouter = express.Router();

sumRouter.post('/sum', myMiddleWare, (req, res, next) => {

    const value = req.body;

    const {a, b} = value;

    if(a === undefined || b === undefined){
        const err = new Error('Missing input');
        err.status = 400;
        next(err);

        return;
    }

    const sum = Number(a) + Number(b);

    if(isNaN(sum)){
        const err = new Error('Invalid input');
        err.status = 400;
        next(err);
        return;
    }

     res.status(200).json({sum}); // Sending JSON response with the sum to the client
})


module.exports = sumRouter;