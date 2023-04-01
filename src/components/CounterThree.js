import React from 'react'
import { useReducer } from 'react'
import { createContext } from 'react';
import Consumer from './Consumer';

export const counterContext=createContext();

const intialState=0;

const reducer=(State,Action)=>{
    switch(Action){
    case "increment":
        return State+1;
    }
}

function CounterThree() {

    const [Count,dispatch]=useReducer(reducer,intialState)
    
  return (
    <div>
        <counterContext.Provider value={{countvalue:Count, dispatchvalue:dispatch}}>
            <Consumer/>
        </counterContext.Provider>  
    </div>
  )
}

export default CounterThree