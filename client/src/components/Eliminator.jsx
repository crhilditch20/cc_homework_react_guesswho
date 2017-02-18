import React from 'react';

class Eliminator extends React.Component {

    constructor (props) {
      super(props);
      this.state = {
        selected: null,
        nextLevelArray: []
      }
    }

    handleChange (event) {
      var valuesArray = [];
      var userChoice = event.target.value;
      console.log(userChoice);
      this.setState({selected: userChoice});
        for (var character of this.props.characters){
          if (character[userChoice] != ""){
          valuesArray.push(character[userChoice])
        }
      }
        var nextLevelArray = [];
        valuesArray.forEach(function(item) {
             if(nextLevelArray.indexOf(item) < 0) {
                 nextLevelArray.push(item);
             }
        });
      this.setState({nextLevelArray: nextLevelArray});
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
