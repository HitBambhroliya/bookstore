import React, { useState } from 'react'
import HookMouse from './HookMouse';


function MouseContainer() {

    const [display, setDisplay]=useState(true);

    const clickHandler=()=>{
        setDisplay(!display);
         console.log(display)
    }

  return (
    <div>
        <button onClick={clickHandler}>button toggle</button>
        {display && <HookMouse/>}
    </div>
  )
}

export default MouseContainer