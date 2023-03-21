import React from 'react'
import { UserConsumer } from './UserContext'

function ComponentB(props) {
  return (
    <UserConsumer>
    {
        username =>{
         return <div>hello {username}</div>
        }
    }
    </UserConsumer>
  )
}

export default ComponentB