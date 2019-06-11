import React, { Component } from 'react'; //import React and Component
import Die from './Die'; //import Die Component
import './RollDice.css'; //import component css file

//let's render a simple icon element called Die
class RollDice extends Component {
  //create an array with all possibilities of dice faces
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };
  //need a constructor to work with State
  constructor(props) {
    super(props);
    //set the starting state at face one
    this.state = { die1: 'one', die2: 'one', rolling: false };
  }

  //create a method to roll the dice
  //arrow function to avoid binding this in the constructor
  roll = () => {
    const { sides } = this.props; //this.props.sides
    const num1 = Math.floor(Math.random() * sides.length); //random num from 0 to 5 the length of sides array
    const num2 = Math.floor(Math.random() * sides.length); //random num from 0 to 5 the length of sides array
    const newDie1 = sides[num1]; //pick a value from the sides array
    const newDie2 = sides[num2]; //pick a value from the sides array

    //set the new State with the two value picked!
    this.setState({ die1: newDie1, die2: newDie2, rolling: true });

    //set rolling back to false after one second
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  };

  //prettier-ignore
  render() {
    const { die1, die2, rolling } = this.state;
    return (
      //render two dice with their states changing on click events
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={ die1 } rolling={ rolling } />
          <Die face={ die2 } rolling={ rolling } />
        </div>
        <button onClick={ this.roll } disabled={ rolling }>
          { rolling ? 'Rolling...' : 'Roll Dice' }
        </button>
      </div>
    );
  }
}

export default RollDice; //export the Component
