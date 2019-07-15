import React, { Component } from 'react';
import Matrix from './Matrix.js';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }


  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor}>

      </div>
    )
  }

  changeColor = () => {
    this.setState({
      color: "#333"
    })
  }

}
