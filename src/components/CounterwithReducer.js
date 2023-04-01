import React from 'react'
import { useReducer } from 'react'


const intialState=0;

const reducer=(State,Action)=>{
    switch(Action){
    case "increment":
        return State+1;
    }
}

function CounterwithReducer() {

    const [State,dispatch]=useReducer(reducer,intialState)

  return (
    <div>
           {State}
        <button onClick={()=>{dispatch('increment')}}>Increment</button>
    </div>
  )
}

export default CounterwithReducer