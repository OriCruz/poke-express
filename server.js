const express = require('express');
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon');

//engine created
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine()) 

//define root route
app.get('/', (req,res)=>{
    res.send('Welcome to the Pokemon App!');
});
//define other routes
app.get('/pokemon/', (req,res)=>{
    res.render('Index', {pokemons:pokemon});
});

app.get('/pokemon/:id', (req,res)=>{
    res.render('Show', {pokemons:pokemon[req.params.id]});
});

//app listening for port
app.listen(port, ()=>{
    console.log('listening on '+port);
})