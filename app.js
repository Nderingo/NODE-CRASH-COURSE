const express = require('express');

// express app 

const app = express();


// listen for requests and responses
app.listen(3000);

app.get('/', (req,res)=>{
    res.send('<p> Home Page</p>');
});