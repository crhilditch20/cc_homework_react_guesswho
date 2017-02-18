import React from 'react';

class Characters extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      just_eliminated: null
    }
  }

  handleClick (event) {
    var index = event.target.value;
    this.setState({just_eliminated: index});
    this.props.addToEliminated(index);
    event.target.innerHTML = "Eliminated!";
  }

  render () {
    var chars = this.props.characters.map(function(character, index){
      return (
        <div>
         
          <button id="char-pic" key={index} value={index} onClick={this.handleClick.bind(this)}>Eliminate<img src={character.image}></img></button>
        </div>
        );
      }.bind(this));
      return (
      <div id="characters">
       
          {chars}
    
      </div>
      );
  }
}
 


export default Characters;
