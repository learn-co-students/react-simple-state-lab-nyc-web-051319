import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value // ...define initial state with a key of 'color' set to the 'value' prop
    }
  }

  changeColor = () => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div onClick={this.changeColor} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
