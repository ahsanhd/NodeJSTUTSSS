const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

const loggerMiddleware = (req, res, next) => {
    const methodUsed = req.method;
    const requestUrl = req.url;

    console.log({methodUsed, requestUrl});
    next();
}
app.use(loggerMiddleware);

const myMiddleWare = (req, res, next) => {
    const secret = req.body.secret;

    if(secret === undefined){
        res.json({error: 'Secret is missing'});
        return;
    }

    if(secret !== 'node') {
        res.json({error: 'Access denied'});
        return;
    }


     next();
}



app.post('/sum', myMiddleWare, (req, res ) => {
    const value = req.body;

    const {a, b} = value;

    if(a === undefined || b === undefined){
        return res.json({error: 'Body is incorrect a or b is missing'});
    }

    const sum = Number(a) + Number(b);

    res.json({sum: 'Sum is ' + sum}); // Sending JSON response with the sum to the client

})

app.get('/', (req, res) => {
    res.send('Hello World!');
})





app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});