import React, { useEffect, useState } from 'react'

function HookMouse() {

    const[X,setX]=useState();
    const[Y,setY]=useState();


    const logMousePosition =(e)=>{
        console.log("mouse log")
        setX(e.clientX);
        setY(e.clientY);
    }

useEffect(()=>{
    console.log("useEffect called")
    window.addEventListener('mousemove',logMousePosition)

    return()=>{
        window.removeEventListener('mousemove',logMousePosition)
    }

},[])


  return (
    <div>x={X} and y={Y}</div>
  )
}

export default HookMouse