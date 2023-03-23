import React, { Component } from 'react'
import axios from 'axios'

 class Post extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:''
      }
    }

    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleClick=(e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(Response =>{
            console.log(Response)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    


  render() {

    const {userId,title,body}=this.state

    return (
        <>
        <form>
           <div>
            <label htmlFor="userId">userId</label>
            <input type="text" name='userId' value={userId} onChange={this.changeHandler} />
           </div>
           <div>
            <label htmlFor="title">title</label>
            <input type="title" name='title' value={title} onChange={this.changeHandler} />
           </div>
           <div>
            <label htmlFor="body">body</label>
            <input type="text" name='body' value={body} onChange={this.changeHandler} />
           </div>
    
           <div>
            <button onClick={this.handleClick} type="submit">Submit</button>
           </div>
        </form>
        </>
    )
  }
}

export default Post
