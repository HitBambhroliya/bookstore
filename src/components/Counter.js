import React, { Component } from 'react'


export class Counter extends Component {
 
    constructor(){
        super();
        this.state={number:0};
    }

    handleCounter = ()=> {
        this.setState({number:this.state.number+1});
    }


  render() {
    return (
      <div>
        <p>Counter:{this.state.number}</p>
        <button onClick={this.handleCounter}>Increment</button>
      </div>
    )
  }
}

export default Counter
