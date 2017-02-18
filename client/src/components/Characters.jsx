import React from 'react';

class Characters extends React.Component {

  render () {
    const chars = this.props.characters.map(function(character, index){
      return (
        <li value={index} key={index}>{character.name}</li>
        );
      });
      return (
      <div>
        <ul>
          {chars}
        </ul>
      </div>
      );
  }
}
 


export default Characters;
