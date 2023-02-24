import React, { Component } from "react";
import Counter from "../components/Counter";
import Title from "../components/Title";


export class Home extends Component {
  constructor() {
    super();
    this.state = { title: "default title", description: "default desc" };
  }

  render() {
    return (
        <>
        <h1>This home page</h1>
      <div>
        <Title
          title1="first title"
          title2="second title"
          title3="third title"
          titlestate={this.state.title}
          descriptionstate={this.state.description}
          
        />
      </div>
      <Counter/>
      
      </>
      
    );
  }
}

export default Home;
