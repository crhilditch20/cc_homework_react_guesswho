import React from 'react';
import Characters from '../components/Characters.jsx';

class GameContainer extends React.Component {
    
  constructor (props) {
    super(props);
    this.state = {
      characters: [{name: "test1"}, {name: "test2"}]
    }
  }

  // componentDidMount () {
  //   const url = "";
  //   const request = new XMLHttpRequest();
  //   request.open('GET', url);
  //   request.onload = function() {
  //     if (request.status === 200){
  //       var data = JSON.parse(request.responseText);
  //       this.setState({ characters: data });
  //     }
  //   }.bind(this);
  //   request.send(null);
  // }

  render () {
    return (
      <div>
        <h2>Game Container</h2>
        <Characters characters={this.state.characters}/>
      </div>
    );
  }

}


export default GameContainer;
