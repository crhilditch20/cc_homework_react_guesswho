import React from 'react';

class Eliminator extends React.Component {

    constructor (props) {
      super(props);
      this.state = {
        selected: "",
        nextLevelArray: [],
        nextSelected: "",
        yesOrNo: ""
      }
    }

    handleChange (event) {
      var valuesArray = [];
      var userChoice = event.target.value;
      this.setState({selected: userChoice});
        for (var character of this.props.characters){
          if (character[userChoice] != ""){
          valuesArray.push(character[userChoice]);
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

    handleNextChange (event) {
      var guessKey = this.state.selected;
      console.log(guessKey);
      var guessValue = event.target.value;
      console.log(guessValue);
      this.checkGuessedStuff(guessKey, guessValue);
    }

    checkGuessedStuff (guessKey, guessValue) {
      var who = this.props.who;
      if (who[guessKey] === guessValue){
        this.setState({yesOrNo: "Yes!"});
      } else {
        this.setState({yesOrNo: "No!"});
      }
    }
    

    render () {
   var options = this.props.characteristics.map(function(type, index){
     return (
       <option value={type} key={index}>{type}</option>
       );
      });
   var nextLevel = this.state.nextLevelArray.map(function(type, index){
      return (
        <option value={type} key={index}>{type}</option>
        );
    });
    return (
      <div id="eliminator"> <p>Pick a characteristic: </p>
      <select value={this.state.selected} onChange={this.handleChange.bind(this)}>
        {options}
      </select>
      <select value={this.state.nextSelected} onChange={this.handleNextChange.bind(this)}>{nextLevel}</select>
      <p>Am I right? {this.state.yesOrNo}</p>
      </div>
     )
    }
}

export default Eliminator;
