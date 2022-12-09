require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon');
const app = express();
const port = 3000;
const db = mongoose.connection;


//Set up middleware
app.use((req, res, next) => {
    console.log("I run for all routes");
    next();
  });

app.use(express.urlencoded({ extended: false }));

//engine created
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

mongoose.set("strictQuery",true);

//Setting up Mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
//check momgoose connection
  mongoose.connection.once("open", () => {
    console.log("connected to mongo");
  });

//   const manyPokemons=[
//     {
//       name: "venusaur", 
//       img: "http://img.pokemondb.net/artwork/venusaur"},
//     {
//       name: "charmander", 
//       img: "http://img.pokemondb.net/artwork/charmander"
//     },
//     {
//       name: "charizard", 
//       img: "http://img.pokemondb.net/artwork/charizard"
//     },
//     {
//       name: "squirtle", 
//       img: "http://img.pokemondb.net/artwork/squirtle"
//     },
//     {
//       name: "wartortle",
//       img: "http://img.pokemondb.net/artwork/wartortle"
//     }
//   ]
// Pokemon.insertMany(manyPokemons)
// //if database transaction succeds
// .then((pokemon)=>{
//   console.log(pokemon);
// })
// //if database transaction fails 
// .catch((error)=>{
//   console.log(error);
// })
// //close db connection either way
// .finally(()=>{
//   db.close();
// })


//define root route
app.get('/', (req,res)=>{
    res.send('Welcome to the Pokemon App!');
});
//define other routes
app.get('/pokemon/', (req,res)=>{
    Pokemon.find({}, (error,allPokemon)=>{ 
        res.render('Index', {pokemons:allPokemon}); 
    });
});

app.get("/pokemon/new", (req, res) => {
    res.render("New");
  });

app.post('/pokemon', (req,res)=>{
    Pokemon.create(req.body, (error, createdPokemon)=>{
        res.redirect("/pokemon/");
    })
});

app.get('/pokemon/:id', (req,res)=>{
    Pokemon.findById(req.params.id, (err,foundPokemon)=>{
       res.render('Show', {pokemons: foundPokemon
        });  
    });
});


//app listening for port
app.listen(port, ()=>{
    console.log('listening on '+port);
})