const React = require('react');

const myStyle = {
    color: '#8c6d47',
    backgroundColor: '#E6E6FA',
  };
  const title={
    textAlign:'center',
    backgroundColor:'purple',
    color:'white'
  };
class Show extends React.Component { 
    render(){
    const {pokemons} = this.props;
    return (
      <body style={myStyle}>
        <div style={title}>
          <h1>Gotta Catch 'Em All!</h1>
        <h2>{pokemons.name}</h2>
        </div>
        
        <img src={pokemons.img.concat('.jpg')}/>
        go {' '}
        <a href={`/pokemon/`}> Back </a>
            
        </body>
      );
    }
  }
module.exports = Show;