import React from 'react';
import Characters from '../components/Characters.jsx';

class GameContainer extends React.Component {
  
  render () {
    return (
      <div>
        <h2>Game Container</h2>
        <Characters />
      </div>
    );
  }

}


export default GameContainer;
