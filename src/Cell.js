import React, { Component } from 'react';

export default class Cell extends Component {

  render() {
    return <div className="cell" onClick={() =>  this.setState({color: '#333'})} style={{backgroundColor: this.state.color}}></div>
  } // end render

  constructor(props) {
    super(props)
    // ...define initial state with a key of 'color' set to the 'value' prop
    this.state = { color: this.props.value }
  } // end constructor


} // end export default class
