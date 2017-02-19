import React from 'react';

class Guess extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      guessed: "",
      guessResult: ""
    }
  }

  handleChange (event) {
    var userGuess = event.target.value;
    this.setState({guessed: userGuess});
    if (userGuess === this.props.who.name){
       this.setState({guessResult: "Correct!"});
    } else {
      this.setState({guessResult: "Sorry not correct!" });
    }
  }

  render () {
  var options = this.props.characters.map(function(character, index){
      return (
        <option value={character.name} key={index}>{character.name}</option>
        );
      });
  return (
    <div id="guess"> Make a guess!
      <select id="character-guess" value={this.state.guessed} onChange={this.handleChange.bind(this)}>
        {options}
      </select>
      <p>{this.state.guessResult}</p>
    </div>
    );
  }
}


export default Guess;