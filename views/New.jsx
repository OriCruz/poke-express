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
class New extends React.Component{
    render(){
        return(
            <body style={myStyle}>
                <div style={title}>
                    <h1>Create new pokemon</h1>  
                </div>
                
                <form action="/pokemon" method='POST'>
                    Name: <input type="text" name='name'/>
                    <br />
                    Image: <input type="text" name='img' />
                    <br />
                    <input type="submit" name='' value='Create pokemon'/>
                </form>
                </body>
        );
    }
}
module.exports=New;