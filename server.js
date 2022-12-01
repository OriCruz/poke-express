const express = require('express');
const app = express();
const port = 3000;

//define root route
app.get('/', (req,res)=>{
    res.send('Welcome to the Pokemon App!');
});

//app listening for port
app.listen(port, ()=>{
    console.log('listening on '+port);
})