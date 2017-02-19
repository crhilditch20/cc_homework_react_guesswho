import React from 'react';
import Characters from '../components/Characters.jsx';
import Eliminator from '../components/Eliminator.jsx';
import Guess from '../components/Guess.jsx';

class GameContainer extends React.Component {
    
  constructor (props) {
    super(props);
    this.state = {
      characters: [],
      characteristics: ["species", "gender", "house", "eyeColour", "hairColour", "hogwartsStudent", "hogwartsStaff"],
      eliminated: [],
      who: "Draco Malfoy",
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
        <Eliminator characters={this.state.characters} characteristics={this.state.characteristics}/>
        <Guess characters={this.state.characters} who={this.state.who}/>
      </div>
    );
  }

}


export default GameContainer;
