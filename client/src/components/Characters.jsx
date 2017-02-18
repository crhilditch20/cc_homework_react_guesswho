import React from 'react';

class Characters extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      just_eliminated: null
    }
  }

  handleClick (event) {
    console.log(event);
    var index = event.target.value;
    console.log(event.target.value);
    this.setState({just_eliminated: index});
    this.props.addToEliminated(index);
    event.target.innerHTML = "Eliminated!";
  }

  render () {
    const chars = this.props.characters.map(function(character, index){
      return (
        <div id="characters">
         
          <button id="char-pic" key={index} value={index} onClick={this.handleClick.bind(this)}>Eliminate<img src={character.image}></img></button>
        </div>
        );
      }.bind(this));
      return (
      <div>
       
          {chars}
    
      </div>
      );
  }
}
 


export default Characters;
