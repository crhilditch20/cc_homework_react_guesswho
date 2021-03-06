import React from 'react';
import Characters from '../components/Characters.jsx';
import Eliminator from '../components/Eliminator.jsx';
import Guess from '../components/Guess.jsx';

class GameContainer extends React.Component {
    
  constructor (props) {
    super(props);
    this.state = {
      characters: [],
      characteristics: ["species", "gender", "house", "eyeColour", "hairColour"],
      leftInGame: [],
      who: {}
    }
  }

  componentDidMount () {
    const url = "http://hp-api.herokuapp.com/api/characters";
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      if (request.status === 200){
        var data = JSON.parse(request.responseText);
        this.setState({ characters: data });
      }
    }.bind(this);
    request.send(null);
  }

  getRandomNumber (max) {
      var min = 0;
      max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1));
    };

  startGame () {
    var max = this.state.characters.length;
    var random = this.getRandomNumber(max);
    var who = this.state.characters[random];
    this.setState({who: who});
    var leftInGame = this.state.characters;
    this.setState({leftInGame: leftInGame})
  }

  updateLeftInGame(index) {
    var toRemove = this.state.characters[index];
    var updatedList = [...this.state.leftInGame];
    var removeIndex = updatedList.indexOf(toRemove);
    updatedList.splice(removeIndex, 1);
    this.setState({leftInGame: updatedList});
  }

  render () {
    return (
      <div>
        <h2>Guess Which Witch (or Wizard)</h2>
        <Characters characters={this.state.characters} updateList={this.updateLeftInGame.bind(this)}/>
        <div id="functions">
        <button id="start" onClick={this.startGame.bind(this)}>Start game</button>
        <Eliminator characters={this.state.characters} characteristics={this.state.characteristics} who={this.state.who}/>
        <Guess characters={this.state.leftInGame} who={this.state.who}/>
      </div>
      </div>
    );
  }

}


export default GameContainer;
