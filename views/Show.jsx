const React = require('react');

class Show extends React.Component{
    render(){
        //const pokemons = this.props.pokemons;//gets the properties of the current element of the array
        return(
            <div> 
                show page
               {/* <h1>{pokemons.name} </h1>  */}
            </div>
        );
    }
}
module.exports = Show;