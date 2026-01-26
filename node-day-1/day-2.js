const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('simple route worked!!');

})

// first route with params

app.get('/hello/:name', (req,res) => {

        console.log({params: req.params})

   const name =  req.params.name;



   res.send('Hello ' + name)
})



app.get('/sum', (req, res) => {


    console.log({query: req.query})


    const a = (req.query.a);

    const b = (req.query.b);

    if (!a || !b ) {
        res.send('One of the params is missing.. stopping ')
        return;
    }


    const sum = Number(a) + Number(b);

    res.send('the sum is ' + sum )

})

app.listen(port, () => {
    console.log('server running on port ' + port)
})