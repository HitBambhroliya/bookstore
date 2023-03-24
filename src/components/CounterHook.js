import React,{useState} from 'react'

function CounterHook() {

    const [count, setcount] = useState(0)

    const clickHandler=()=>{
        setcount(count+1);
    }

  return (
    <>   
     <p>{count}</p>
    <button onClick={clickHandler}>Increment</button>
    </>

  )
}

export default CounterHook
