import React from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { UserContext } from '../App'



function ComponentB(props) {
  const username = useContext(UserContext)

  return (
    
    
    
      
      <div>hello- {username}</div>
        
    
    
  )
}

export default ComponentB