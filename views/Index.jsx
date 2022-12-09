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

class Index extends React.Component { render(){
    const {pokemons} = this.props;
    return (
      <body style={myStyle}>
      <div style={title}> 
        <h1>See All The Pokemon!</h1>
      </div>
        <a href="/pokemon/new">Create new</a>
        <ul>
            {pokemons.map((pokemon, i)=>{
                return(
                    <li>
                        The{' '}
                        <a href={`/pokemon/${pokemon.id}`}>{pokemon.name[0].toUpperCase()+ pokemon.name.slice(1)}
                        </a>{' '} <br></br>
                    </li>
                );
            })}
        </ul> 
        </body>
      );
    }
  }
module.exports = Index;