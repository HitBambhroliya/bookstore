import React, { Component } from 'react'

class Userdetail extends Component {
  render() {
    const {user}=this.props
    return (
      <div>
        <h5>id:{user.id}</h5>
        <h5>name:{user.name}</h5>
        <h5>username:{user.username}</h5>
        <h5>email:{user.email}</h5>
        <h5>web:{user.website}</h5>
        <p>address street :{user.address.street}</p>
      </div>
    )
  }
}

export default Userdetail
