import React, { Component } from 'react'

export class inputRef extends Component {
    constructor(props){
        super(props);
        this.inputRef=React.createRef();
     }
     focusInput=()=>{
        this.inputRef.current.focus();
       
    }

  render() {

    

    return (
      <div>
        <input ref={this.inputRef} type="text" />
      </div>
    )
  }
}

export default inputRef
