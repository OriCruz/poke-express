const React = require('react');
const pokemon = require('../models/pokemon');

const myStyle = {
    color: '#8c6d47',
    backgroundColor: '#E6E6FA',
  };

class Show extends React.Component { 
    render(){
    const {pokemons} = this.props;
    return (
      <div style={myStyle}>
        <h1>Gotta Catch 'Em All!</h1>
        <h2>{pokemons.name}</h2>
        <img src={pokemons.img.concat('.jpg')}/>
        go {' '}
        <a href={`/pokemon/`}> Back </a>
            
        </div>
      );
    }
  }
module.exports = Show;