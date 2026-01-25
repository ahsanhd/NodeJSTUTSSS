

const express = require('express');

const app = express();

const port = 3000;


app.get('/', (req, res) => {
    res.send('My first Server Started, hehe Hello Worlddd!!');

})

app.get('/time', (req,res) => {
    const currTIme = new Date().toLocaleDateString();
    res.send('Currently Date is : ' + currTIme);
})

app.listen(port,() => {
    console.log('My First Server');
})