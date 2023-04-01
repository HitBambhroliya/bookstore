import React from 'react'
import { useContext } from 'react'
import { counterContext } from './CounterThree'


function Consumer() {
    const counter = useContext(counterContext);
  return (
    <div>
        {counter.countvalue}
        <button onClick={()=> counter.dispatchvalue('increment')}>increment</button>
    </div>
  )
}

export default Consumer