const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


app.post('/sum', (req, res ) => {
    const value = req.body;

    console.log({value});
    const {a, b} = value;

    if(a === undefined || b === undefined){
        return res.json({error: 'Body is incorrect a or b is missing'});
    }

    const sum = Number(a) + Number(b);

    res.json({sum: 'Sum is ' + sum}); // Sending JSON response with the sum to the client

})






app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});