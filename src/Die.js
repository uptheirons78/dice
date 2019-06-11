import React, { Component } from 'react'; //import React and Component
import './Die.css'; //import component css file

//let's render a simple icon element called Die
//prettier-ignore
class Die extends Component {
  render() {
    const { face, rolling } = this.props; //this.props.face - Obj Destruc ES6
    const icon = `fas fa-dice-${face}`; //create a class var

    //return a dynamic icon based on this.props.face
    return <i className={`Die ${ icon } ${ rolling ? 'shaking' : '' }`} />;
  }
}

export default Die; //export the Component
