const express = require('express');
const app = express();
const port = 3000;

const pokemon = require('./models/pokemon');

//define root route
app.get('/', (req,res)=>{
    res.send('Welcome to the Pokemon App!');
});
//define other routes
app.get('/pokemon/', (req,res)=>{
    res.send(pokemon);
});

//app listening for port
app.listen(port, ()=>{
    console.log('listening on '+port);
})