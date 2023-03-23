import axios from 'axios'
import React, { Component } from 'react'
import Userdetail from './Userdetail'

class Users extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       users:[]
    }
  }

  componentDidMount =()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")

    .then(Response =>{
      console.log(Response)
      this.setState({users:Response.data})
    })

    .catch(error=>{
      console.log(error)
    })
  }

   
  render() {
    const {users}=this.state
 
    return (
      <div>
        
        {
        users.map(user => 
          <Userdetail user={user} key={user.id + user.username}/>
        )
  }
      </div>
    )
  }
}

export default Users
