import axios from 'axios'
import React, { Component, useEffect, useState } from 'react'
import Userdetail from './Userdetail'

//same implementation of the below code using useeffect Hook
function Users() {

  const [users, setusers]=useState([]);

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")

         .then(Response =>{
           setusers(Response.data)     
         })
    
         .catch(error=>{
           console.log(error)
        })
  })
  
  return (
    <div>
    {
      users.map(user =>{
       return <Userdetail user={user} key={user.id + user.username}/>
      })
    }
    </div>
  )
}

export default Users



// class Users extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        users:[]
//     }
//   }

//   componentDidMount =()=>{
//     axios.get("https://jsonplaceholder.typicode.com/users")

//     .then(Response =>{
//       console.log(Response)
//       this.setState({users:Response.data})
//     })

//     .catch(error=>{
//       console.log(error)
//     })
//   }

   
//   render() {
//     const {users}=this.state
 
//     return (
//       <div>
        
//         {
//         users.map(user => 
//           <Userdetail user={user} key={user.id + user.username}/>
//         )
//   }
//       </div>
//     )
//   }
// }

// export default Users
