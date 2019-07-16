import React from 'react'

export default class Cell extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            color: this.props.value
        }
    }


changeColor = () => {
    const newcolor = '#333'
    this.setState(
        {color: newcolor}
    )

}

render() {
    return (
        <div className = "cell" onClick={this.changeColor} style={{backgroundColor: this.state.color}}></div>
    )

}


    }
