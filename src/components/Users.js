import axios from 'axios'
import React, { Component, useEffect, useReducer, useState } from 'react'
import Userdetail from './Userdetail'

const initialState={
   loading:true,
  post:{},
   error:''
}

const reducer=(State,Action)=>{
   switch(Action.type){
    case "FETCH_SUCCESS":
      return {
        loading:false,
        post:Action.payload,
        error:""
      }
      
    case "FETCH_ERROR":
      return{
        loading:false,
        error:"something went to wrong",
        post:{}
      }  
   }
}


function Users(){

  const [user,dispatch]= useReducer(reducer,initialState)

   useEffect(() => {
  
    axios.get('https://jsonplaceholder.typicode.com/posts/1')

    .then(Response=>{
     dispatch({type:"FETCH_SUCCESS",payload:Response.data})
    })
    .catch(err=>{
       dispatch({type:"FETCH_ERROR"})
    })

  
    
  }, [])
  


  return(
    <div>
       

         {user.loading?"loading":user.post.title}
         {user.error?user.error:null}
  
    </div>
  )
}

export default React.memo(Users);





//same implementation of the below code using useeffect Hook
// function Users() {

//   const [users, setusers]=useState([]);

//   useEffect(()=>{
//     axios.get("https://jsonplaceholder.typicode.com/users")

//          .then(Response =>{
//            setusers(Response.data)     
//          })
    
//          .catch(error=>{
//            console.log(error)
//         })
//   })
  
//   return (
//     <div>
//     {
//       users.map(user =>{
//        return <Userdetail user={user} key={user.id + user.username}/>
//       })
//     }
//     </div>
//   )
// }

// export default Users



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
