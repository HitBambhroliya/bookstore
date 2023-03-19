import React, { Component } from "react";
// import Counter from "../components/Counter";
// import Title from "../components/Title";

import UserList from "../components/UserList";
import Hoc from "../components/Hoc";
export class Home extends Component {
  
  render(){
   
    const userData=[
      {id:1, name:"hit"},
      {id:2, name:"meet"},
      {id:3, name:"rohit"}
  ]

  const Users=Hoc(UserList,userData);
  return <Users/>
  }




  // render() {
  //   return (
  //       <>
  //       <h1>This home page</h1>
  //     <div>
  //       <Title
  //         title1="first title"
  //         title2="second title"
  //         title3="third title"
  //         titlestate={this.state.title}
  //         descriptionstate={this.state.description}
          
  //       />
  //     </div>
  //     <Counter/>
      
  //     </>
      
  //   );
  // }
}

export default Home;
