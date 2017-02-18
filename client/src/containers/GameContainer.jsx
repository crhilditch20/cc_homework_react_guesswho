import React from 'react';
import Characters from '../components/Characters.jsx';
import Eliminator from '../components/Eliminator.jsx';

class GameContainer extends React.Component {
    
  constructor (props) {
    super(props);
    this.state = {
      characters: [],
      characteristics: ["species", "gender", "house", "eyeColour", "hairColour", "hogwartsStudent", "hogwartsStaff"],
      eliminated: [],
      who: null,
      guessed: null
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

  addToEliminated (index) {
    var updatedArray = [...this.state.eliminated];
    updatedArray.push(this.state.characters[index]);
    this.setState({eliminated: updatedArray});
  }

  render () {
    return (
      <div>
        <h2>Guess Who</h2>
        <Characters characters={this.state.characters} addToEliminated={this.addToEliminated.bind(this)}/>
        <button id="start">Start game</button>
        <Eliminator characters={this.state.characters} characteristics={this.state.characteristics}/>
      </div>
    );
  }

}


export default GameContainer;
