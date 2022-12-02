const React = require('react');

const myStyle = {
    color: '#8c6d47',
    backgroundColor: '#E6E6FA',
  };

class Index extends React.Component { render(){
    const {pokemons} = this.props;
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <ul>
            {pokemons.map((pokemon, i)=>{
                return(
                    <li>
                        The{' '}
                        <a href={`/pokemon/${i}`}>{pokemon.name[0].toUpperCase()+ pokemon.name.slice(1)}
                        </a>{' '} <br></br>
                    </li>
                );
            })}
        </ul> 
        </div>
      );
    }
  }
module.exports = Index;