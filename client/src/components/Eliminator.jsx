import React from 'react';

class Eliminator extends React.Component {

    constructor (props) {
      super(props);
      this.state = {
        selected: null
      }
    }

    handleChange (event) {
      var nextLevelArray = [];
      var userChoice = event.target.value;
      console.log(userChoice);
      this.setState({selected: userChoice});
        for (var character of this.props.characters){
          nextLevelArray.push(character[userChoice])
        }
        console.log(nextLevelArray);
    }

    render () {
   var options = this.props.characteristics.map(function(type, index){
     return (
       <option value={type} key={index}>{type}</option>
       );
      });
    return (
      <select id="eliminator" value={this.state.selected} onChange={this.handleChange.bind(this)}>
        {options}
      </select>
     )
    }
}

export default Eliminator;
